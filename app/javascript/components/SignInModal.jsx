import React from "react";
import {
  CloseButton,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import SignInForm from "./SignInForm";

const SignInModal = ({ onClose }) => {
  return (
    <>
      <ModalHeader>
        <ModalTitle className="text-primary">Sign in</ModalTitle>
        <CloseButton onClick={onClose} />
      </ModalHeader>
      <ModalBody className="px-5 mb-3">
        <SignInForm onClose={onClose} />
      </ModalBody>
    </>
  );
};
export default SignInModal;
