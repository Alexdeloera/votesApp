import { useContext, useEffect, useState } from "react"

import { getPost } from "../api/getPost";
import { PostContainer } from "../components/PostContainer/PostContainer"
import { sessionProvider } from "../context/SessionContext";
import { getLikes } from "../api/getLikes";

export const Dashboard = () => {
  const { session } = useContext(sessionProvider)
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);

  const { search } = useContext(sessionProvider);	

  const handleSearchPosts = () => {

    const searchPosts = posts.filter((post: any) => {
      if (post.title.toLowerCase().includes(search.toLowerCase())||post.state.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    });
    
    setSearchPosts(searchPosts);
  }

  useEffect(() => {
    handleSearchPosts();
  }, [search])




  const getPosts = async () => {
    try {
      const post = await getPost(session.token);
      setPosts(post);
      const likes= await getLikes({token:session.token});
      setLikes(likes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
   
  useEffect(() => {
    handleSearchPosts();
  },[search,posts]);

  return (
    <div className="w-full mt-16">
      <h1 className="text-2xl font-bold mb-6">Community proyects</h1>
      {posts.length > 0 && <PostContainer posts={searchPosts.length > 0 ? searchPosts : posts} likes={likes}/>}
    </div>
  )
}