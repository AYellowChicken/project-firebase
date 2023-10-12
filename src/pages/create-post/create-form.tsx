import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

export const CreateForm = () => {
  
  const [user] = useAuthState(auth);

  // Interface for typescript and our data
  interface CreateFormData {
    title: string;
    description: string;
  }

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    console.log(data);
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });

  }

  return (
    <>
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")}/>
      <textarea placeholder="Description..." {...register("description")}/>
      <input type="submit" />
    </form>

    { Object.values(errors).map((fieldError, key) => (
      <p className="error" key={key}>{fieldError.message }</p>
    )) }
    </>
  )
};