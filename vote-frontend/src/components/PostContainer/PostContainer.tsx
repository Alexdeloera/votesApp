
import { IRows, Post } from "../Post/Post";
interface IPostProps {
  posts: IRows[];
  likes: any[];
}
export const PostContainer = ({ posts, likes }: IPostProps) => {

  const updatedPosts = posts.map((post) => {
    const isLiked = likes.find((like) => {
      if (like.post_id === post.id) {
        return true;
      }
    });
    return { ...post, like: !!isLiked };
  });

  return (
    <section className="posts-container">

      {updatedPosts.map((post) => {
        return (
          <Post key={post.id} post={post} />)
      })}

    </section>
  )
}