import axios from "axios";
import { iPost } from "../views/CreatePost";

export const postPost = async (values: iPost) => {
  const url = "http://127.0.0.1:8000/api/post/create";
  const token = "2|P5EHn8eyuMwcRVDNfjkjLDwncBgs9H3ZupDHwOoWf1ece9fa";

  try {
    const post = await axios.post(url, values, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return post.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};
