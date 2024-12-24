import React from "react";
import PostCard from "./PostCard";

const PostsList = ({ posts, isLoading }) => {
  return isLoading ? (
    <p className="text-light">Loading...</p>
  ) : (
    <div className="h-100 col-10 col-xs-10 col-sm-10 col-md-8 col-lg-6 px-1">
      <ul className="h-100 border border-dark-subtle rounded p-3 d-flex flex-column gap-2 overflow-y-scroll">
        {posts?.map((post, index) => (
          <li key={index}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostsList;
