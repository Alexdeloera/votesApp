import axios from "axios";
interface IRegister{
  name:string,
  email:string,
  password:string,
}
export const postRegister= async (values: IRegister) => {
  const url = "http://127.0.0.1:8000/api/singn-up";
  try {
    const post = await axios.post(url, values, {
      headers: {
        Accept: "application/json",
      },
    });

    return post.data;
  } catch (error) {
    throw`Error: ${error}`;
  }
};