import React from "react";
import { ListGroup } from "react-bootstrap";

const RecommendedList = () => {
  return (
    <div className="h-100 d-none d-lg-block col-lg-3 container container-fluid text-light px-1">
      <div className="p-2">
        <p>What’s happening</p>
        <ListGroup>
          <ListGroup.Item className="bg-transparent border-dark-subtle text-light">
            News
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-dark-subtle text-light">
            Sports
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-dark-subtle text-light">
            Entertainment
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
export default RecommendedList;
