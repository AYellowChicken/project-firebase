import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { PostsPage } from "../components/postspage";
import { Link } from "react-router-dom";

export const Main = () => {

  const [user] = useAuthState(auth);

  return (
  <div>
    <h1>Home</h1>
    { user ? <PostsPage /> : <h3>You need to <Link to="/login/">login</Link> to see the dashboard.</h3> } 
  </div>
  )
}