interface IRowsProps {
  post: IRows;
}

export interface IRows {
 title: string;
 state: string;
 date: string;
 name: string;
 id: number;
 likes: number;
 body: string;   
}

export const Post = ({ post }: IRowsProps) => {
  // generar si le dio like el usuario en la respuesta del post, total de likes que tiene el post
  
  return (
    <article className="border-2 w-full mb-6 py-5 rounded-md relative">
      <ul>
        <li>{post.title}</li>
        <li>State: {post.state}</li>
        <li>Date: {post.date}</li>
        <li>Author: {post.name}</li>
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
      <span className="absolute top-4 right-12">{post.likes}</span>
    </article>
  )
};
