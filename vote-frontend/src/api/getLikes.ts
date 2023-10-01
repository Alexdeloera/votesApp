import axios from "axios";
interface ILikes{
  token:string
}
export const getLikes = async (values:ILikes ) => {
  const url = "http://127.0.0.1:8000/api/likes";
  try {
    const likes = await axios.get(url,{
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${values.token}`,
      },
    });
    return likes.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};