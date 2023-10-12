export interface IPost {
  id: string; // This is the field added in firebase. This is dynamically added to our post object by post page when we fetch.
  title: string;
  description: string;
  username: string;
  userId: string;
}

export const Post = (props:IPost) => {
  return (
    <div className="post">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>@{props.username}</p>
    </div>
  );
};