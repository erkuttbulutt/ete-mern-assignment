import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { getPostsAction } from "../redux/actions/post";
import { useEffect } from "react";

function Home() {
  const { posts } = useSelector((state) => state.posts);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPostsAction());
    }, []);
  
  return (
    <div className="flex items-center m-5 flex-wrap">
      {posts.length > 0 &&
        posts?.map((post, i) => <HomeCard key={i} post={post} />)}
    </div>
  );
}

export default Home;
