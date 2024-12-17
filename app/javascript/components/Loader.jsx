import React from "react";
import { Comment } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center bg-primary">
        <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"     
      color="#0d6efd"
      backgroundColor="#fff"
    />
    </div>
  );
};
export default Loader;
