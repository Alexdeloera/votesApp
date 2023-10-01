import axios from "axios";
import { ISession } from "../interface/session.interface";

export const getLogin = async (values: any) => {
  const url = "http://127.0.0.1:8000/api/singn-in";

  try {
    const post = await axios.post(url, values, {
      headers: {
        Accept: "application/json",
      },
    });

    const resp: ISession = {
      id: post.data.user.id,
      name: post.data.user.name,
      token: post.data.access_token,
    };
  
    return resp;
  } catch (error) {
    throw `Error: ${error}`;
  }
};
