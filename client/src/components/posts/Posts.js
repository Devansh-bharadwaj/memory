import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <div className="container">
        <div className="row">
          {!posts?.length ? (
            <h2>Loading...</h2>
          ) : (
            posts?.map((post, i) => (
              <Post key={i} post={post} setCurrentId={setCurrentId} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Posts;
