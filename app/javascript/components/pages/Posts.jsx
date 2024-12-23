import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../userContext";
import postService from "../../services/postService";
import NavBar from "../NavBar";
import PostsList from "../PostsList";
import RecommendedList from "../RecommendedList";

const Posts = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsLoading(true);
    try {
      const data = await postService.fetch();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (!user) {
    return null;
  }

  return (
    <main
      className={`vh-100 vw-100 bg-dark overflow-hidden py-3 ${
        windowWidth < 768 ? "px-1" : "px-5"
      }`}
    >
      <div className="row w-100 h-100">
        <NavBar windowWidth={windowWidth} />
        <PostsList posts={posts} isLoading={isLoading} />
        <RecommendedList />
      </div>
    </main>
  );
};
export default Posts;
