import axios from "axios";
interface IUser {
  user_id: number;
  token: string;
}
export const postPost = async (values: IUser) => {
  const url = "http://127.0.0.1:8000/api/user";
  const defaultToken = "2|P5EHn8eyuMwcRVDNfjkjLDwncBgs9H3ZupDHwOoWf1ece9fa";

  try {
    const user = await axios.post(url, {user_id:values.user_id}, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${values.token||defaultToken}`,
      },
    });
    console.log('hola',user.data);
    return user.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};