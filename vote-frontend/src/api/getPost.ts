import axios from "axios";

export const getPost = async (token: string) => {
  const url = "http://127.0.0.1:8000/api/post";
  const defaultToken = "2|P5EHn8eyuMwcRVDNfjkjLDwncBgs9H3ZupDHwOoWf1ece9fa";

  try {
    const post = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token || defaultToken}`,
      },
    });

    return post.data;
  } catch (error) {
    return `Error: ${error}`;
  }
};
