import axios from "axios";
interface ILikes{
  token:string
  values:{
    post_id:number,
    user_id:number,
  }
}
export const deleteLike = async (data:ILikes ) => {
  const url = "http://127.0.0.1:8000/api/likes/delete";
  try {
    const likes = await axios.post(url,data.values,{
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    });
    return likes.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};