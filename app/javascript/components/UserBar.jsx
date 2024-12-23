import React, { useContext } from "react";
import authService from "../services/authService";
import { UserContext } from "./userContext";
import { Dropdown } from "react-bootstrap";
import { RxAvatar } from "react-icons/rx";

const UserBar = () => {
  const { setUser } = useContext(UserContext);
  const handleSignOut = async () => {
    try {
      const response = await authService.logout();
      setUser(null);
    } catch {
      (err) => console.log(err);
    }
  };
  return (
    <Dropdown className="w-100 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <div className="bg-light rounded-circle">
          <RxAvatar style={{ width: 32, height: 32 }} />
        </div>
        <div
          className="d-none d-md-flex flex-column align-items-start text-light"
          style={{ fontSize: 13 }}
        >
          <span>name</span>
          <span className="fw-lighter">nickname</span>
        </div>
      </div>
      <Dropdown.Toggle className="bg-transparent border-0" />

      <Dropdown.Menu>
        <Dropdown.Item>Add an existing account</Dropdown.Item>
        <Dropdown.Item onClick={handleSignOut}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default UserBar;
