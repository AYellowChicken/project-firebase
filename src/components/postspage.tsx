import {
  collection,
  query,
  where,
  getDocs,
  Query,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { Post, IPost } from "./post";

export const PostsPage = () => {

  // const q = query(
  //   collection(db, "posts"),
  //   where("title", "==", "Dark Souls 2")
  // );

  const [postsList, setPostsList] = useState<IPost[] | null>(null);
  const q_all = collection(db, "posts");

  // 1. Function async pour query (comme on avait fait)
  const fetchPosts = async (query: Query) => {
    try {
      const queryPosts = await getDocs(query);
      setPostsList(queryPosts.docs.map((doc) => 
        ({ ...doc.data(), id: doc.id})) as IPost[]);
    } catch (error) {
      console.log("Error fetching posts : ", error);
    }
  };

  // 2. Récupérer les données au mounting
  useEffect(() => {
    fetchPosts(q_all);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 3. Retourner les données de l'état postsList dans une liste de Posts
  return (
    <div className="postDashBoard">
      {postsList?.map((post, key) => {
        console.log(post);
        return <Post {...post} key={key}/> 
      })}
  </div>
  );
};
