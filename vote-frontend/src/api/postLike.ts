import axios from "axios";

interface ILikes{
  post_id:number,
  user_id:number,
}
interface IPostProps{
  values:ILikes,
  token:string
}
export const postLike = async (data:IPostProps) => {
  const url = "http://127.0.0.1:8000/api/likes/set";
  try {
    const post = await axios.post(url, data.values, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    });

    return post.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};
