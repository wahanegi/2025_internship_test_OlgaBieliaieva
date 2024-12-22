import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import authService from "../../services/authService";
import { PrimaryButtonReverse } from "../Buttons";
import Header from "../Header";

const Posts = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      const response = await authService.logout();
      setUser(null);
    } catch {
      (err) => console.log(err);
    }
  };

  if (!user) {
    return null;
  }
  return (
    <>
      <Header />
      <p className="m-0">{`Welcome, ${user.name}`}</p>
      <PrimaryButtonReverse text="Log out" action={handleSignOut} />
    </>
  );
};
export default Posts;
