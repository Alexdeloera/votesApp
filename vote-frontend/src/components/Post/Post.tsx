import { IPost } from "../../interface/post.interface";

interface IRowsProps {
  post: IPost;
}

export const Post = ({ post }: IRowsProps) => {
  // generar si le dio like el usuario en la respuesta del post, total de likes que tiene el post
  
  return (
    <article className="border-2 w-full mb-6 py-5 rounded-md relative">
      <ul>
        <li>{post.title}</li>
        <li>{post.state}</li>
        <li>{post.date}</li>
        <li>{post.body}</li>
      </ul>
      <button
        className="w-8 h-8 absolute top-3 right-3 bg-gray-200 block p-2 rounded-full"
      >
        <img
          src="/public/images/icons/thumbs-up-regular.svg"
          className=""
        />
      </button>
    </article>
  )
};
