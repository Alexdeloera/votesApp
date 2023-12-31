import axios from "axios";
import { iPost } from "../views/CreatePost";
interface IPostProps{
  values:iPost,
  token:string
}
export const postPost = async (data:IPostProps) => {
  const url = "http://127.0.0.1:8000/api/post/create";
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
