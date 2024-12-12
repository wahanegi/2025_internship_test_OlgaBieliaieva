import React, { useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import MainModal from "../MainModal";
import SignInModal from "../SignInModal";
import SignUpForm from "../SignUpForm";
import { LinkButton } from "../Buttons";

const Home = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const openSignInModal = () => {
    setIsSignIn(true);
  };
  const closeSignInModal = () => setIsSignIn(false);
  return (
    <main className="max-vw-100 min-vh-100 p-5 d-flex flex-column align-items-center justify-content-center bg-primary">
      <div className="container container-fluid row h-100 align-items-center justify-content-center p-0">
        <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6 container container-fluid h-100 d-flex flex-column align-items-center justify-content-center p-2 gap-2">
          <GoCommentDiscussion
            className="text-white"
            style={{ fill: "currentColor", width: 80, height: 80 }}
          />
          <h1 className="text-white text-center">
            Welcome to Tweetly - Your Voice, Your Community
          </h1>
        </section>
        <section className="col-sm-12 col-md-6 col-lg-6 col-xl-6 container container-fluid h-100 d-flex flex-column align-items-center justify-content-center p-2 gap-2">
          <h2 className="text-white text-center">
            Join Tweetly today and be part of a vibrant community.
          </h2>
          <SignUpForm />
          <div className="d-flex align-items-center text-white">
            <p className="text-white m-0">Already have an account?</p>
            <LinkButton text="Sign in" action={openSignInModal} />
          </div>
        </section>
      </div>
      <MainModal isOpen={isSignIn} onClose={closeSignInModal}>
        <SignInModal onClose={closeSignInModal} />
      </MainModal>
    </main>
  );
};
export default Home;
