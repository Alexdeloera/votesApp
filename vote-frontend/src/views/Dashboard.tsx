import { useContext, useEffect, useState } from "react"

import { getPost } from "../api/getPost";
import { PostContainer } from "../components/PostContainer/PostContainer"
import { sessionProvider } from "../context/SessionContext";

export const Dashboard = () => {
  const { session } = useContext(sessionProvider)
  const [posts, setPosts] = useState([]);


  const getPosts = async () => {
    try {
      const post = await getPost(session.token);
      setPosts(post);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="w-full mt-16">
      <h1 className="text-2xl font-bold mb-6">Community proyects</h1>
      {posts.length !== 0 && <PostContainer posts={posts} />}
    </div>
  )
}