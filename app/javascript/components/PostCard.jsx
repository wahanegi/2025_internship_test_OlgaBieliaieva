import React from "react";
import { format } from "date-fns";
import { Card } from "react-bootstrap";
import { RxAvatar } from "react-icons/rx";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { IoBookmarksOutline } from "react-icons/io5";

const PostCard = ({ post }) => {
  return (
    <Card className="text-light bg-transparent">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-light rounded-circle text-dark">
            <RxAvatar style={{ width: 32, height: 32 }} />
          </div>
          <div
            className="d-flex flex-column align-items-start"
            style={{ fontSize: 13 }}
          >
            <span>{post.user.name}</span>
            <span className="fw-lighter">{post.user.nickname}</span>
          </div>
        </div>
        <span>{format(new Date(post.created_at), "MMM dd")}</span>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        {post.media && (
          <Card.Img
            src={post.media}
            style={{
              width: "100%",
              borderRadius: 30,
              objectFit: "cover",
              aspectRatio: "16 / 9",
            }}
          />
        )}
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-1">
          <FaRegComment />
          <span>23</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <AiOutlineLike />
          <span>15</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <AiOutlineDislike />
          <span>8</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <IoBookmarksOutline />
        </div>
      </Card.Footer>
    </Card>
  );
};
export default PostCard;
