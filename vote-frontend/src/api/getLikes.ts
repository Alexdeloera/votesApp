import axios from "axios";
interface ILikes{
  post_id:number,
  token:string
}
export const getLikes = async (values:ILikes ) => {
  const url = "http://127.0.0.1:8000/api/likes";
  const defaultToken = "2|P5EHn8eyuMwcRVDNfjkjLDwncBgs9H3ZupDHwOoWf1ece9fa";

  try {
    const likes = await axios.post(url,{post_id:values.post_id}, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${values.token||defaultToken}`,
      },
    });
    console.log('hola',likes.data);
    return likes.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};