import { useContext, useEffect, useState } from "react";
import { sessionProvider } from "../../context/SessionContext";
import { postLike } from "../../api/postLike";
import { deleteLike } from "../../api/deleteLike";
import './Post.css'
import { set } from "react-hook-form";
interface IRowsProps {
  post: IRows;
}

export interface IRows {
  title: string;
  state: string;
  date: string;
  name: string;
  id: number;
  like_count: number;
  body: string;
  like: boolean;
}

export const Post = ({ post }: IRowsProps) => {

  const [like, setLike] = useState(post.like);
  const [likes, setLikes] = useState(post.like_count);
  const { session } = useContext(sessionProvider)
  const [message, setMessage] = useState('');

  const handleLike = async () => {
    setLike(post.like);

    if (like === false) {
      setLike(like);

      try {
        await postLike({ token: session.token, values: { post_id: post.id, user_id: session.id } });
        setLike(!like);
        setLikes(likes + 1);
      } catch (error: any) {
        setMessage(error.message);
      }

    } else if (like) {

      try {
        await deleteLike({ token: session.token, values: { post_id: post.id, user_id: session.id } });
        setLike(!like);
        setLikes(likes - 1);
      } catch (error: any) {
        setMessage(error.message);
      }

    }
  }

  useEffect(() => {
    setLike(post.like);
    setLikes(post.like_count);
  }, [post.like, post.like_count])

  return (
    <article className="border-2 w-full mb-6 py-5 rounded-md relative">
      <ul>
        <li className="post-title">{post.title}</li>
        <li>State: {post.state}</li>
        <li>Date: {post.date}</li>
        <li>Author: {post.name}</li>
        <hr className="post-hr" />
        <li>{post.body}</li>
      </ul>
      {!like ? <button
        className="w-8 h-8 absolute top-3 right-3 bg-gray-200 block p-2 rounded-full"
        onClick={handleLike}
      >
        <img
          src="/public/images/icons/thumbs-up-regular.svg"
          className=""
        />
      </button> : <button
        className="w-8 h-8 absolute top-3 right-3 bg-gray-200 block p-2 rounded-full"
        onClick={handleLike}
      >
        <img
          src="/public/images/icons/thumbs-up-solid.svg"
          className=""
        /></button>}
      <span className="absolute top-4 right-12">{likes}</span>
      {message && <p className="text-red-500">{message}</p>}

    </article>
  )
};
