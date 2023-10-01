import { useContext, useState } from "react";
import { sessionProvider } from "../context/SessionContext";
import { PostForm } from "../components/PostForm/PostForm";
import { postPost } from "../api/postPosts"
import { useNavigate } from "react-router-dom";
export interface iPost{
  title: String,
  state: String,
  user_id: number,
  date:String,
  body: String
}
export const CreatePost = () => {
  
  const navigate=useNavigate();
  const [message,setMessage]=useState('');
  const { session }=useContext(sessionProvider);
  
  const postSubmit= async (values:iPost)=> {
      values={...values,user_id:session.id}
      try {
        const resp=await postPost({values:values,token:session.token});
        navigate('/dashboard');

      }catch (error) {
        setMessage("Error al publicar tu post  ");
      }
  }
      
  return(
    <>
      <PostForm name={session.name} id={session.id} postSubmit={postSubmit}/>
      <p>{message}</p>
    </>
  )
}