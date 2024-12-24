import React, { useContext } from "react";
import {
  CloseButton,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { UserContext } from "./userContext";
import NewPostForm from "./NewPostForm";

const NewPostModal = ({ onClose }) => {
  const { user } = useContext(UserContext);

  return user?.confirmed ? (
    <>
      <ModalHeader>
        <ModalTitle className="text-primary">New post</ModalTitle>
        <CloseButton onClick={onClose} />
      </ModalHeader>
      <ModalBody className="px-5 mb-3">
        <NewPostForm onClose={onClose} />
      </ModalBody>
    </>
  ) : (
    <>
      <ModalHeader>
        <ModalTitle className="text-primary">New post</ModalTitle>
        <CloseButton onClick={onClose} />
      </ModalHeader>
      <ModalBody className="px-5 mb-3">
        <p>You must confirm your email before creating a new post.</p>
      </ModalBody>
    </>
  );
};
export default NewPostModal;
