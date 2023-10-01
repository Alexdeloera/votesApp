import { Post } from "../Post/Post";
import { IPost } from "../../interface/post.interface";

interface IPostProps {
  posts: IPost[];
}
export const PostContainer = ({ posts }: IPostProps) => {
  return (
    <section className="posts-container">
      {posts.map((post) => (<Post key={post.id} post={post} />))}
    </section>
  )
}