import { IRows, Post } from "../Post/Post";

interface IPostProps {
  posts: IRows[];
}
export const PostContainer =({ posts }: IPostProps) => {
  console.log(posts);
  
  return (
    <section className="posts-container">
      {posts.map((post) =>(<Post key={post.id} post={post}/>))}
    </section>
  )
}