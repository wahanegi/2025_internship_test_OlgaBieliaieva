import React, { useContext } from "react";
import { UserContext } from "../userContext";
import authService from "../../services/authService";
import { PrimaryButtonReverse } from "../Buttons";

const Posts = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const handleSignOut = async () => {
    try {
      const response = await authService.logout();
      console.log(response);

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
      <p className="m-0">{`Welcome, ${user.name}`}</p>
      <PrimaryButtonReverse text="Log out" action={handleSignOut} />
    </>
  );
};
export default Posts;
