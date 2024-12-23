import React, { useState } from "react";
import { Navbar, Nav, NavItem, NavLink, Container } from "react-bootstrap";
import MainModal from "./MainModal";
import NewPostModal from "./NewPostModal";
import UserBar from "./UserBar";
import { PrimaryButtonReverse } from "./Buttons";
import { GoCommentDiscussion } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { PiUsersFourLight } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";

const NavBar = ({ windowWidth }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openNewPostModal = () => {
    setIsOpenModal(true);
  };
  const closeNewPostModal = () => setIsOpenModal(false);

  return (
    <div className="h-100 col-2 col-xs-2 col-sm-2 col-md-4 col-lg-3 d-flex flex-column justify-content-between">
      <Nav className="flex-column">
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <GoCommentDiscussion style={{ width: 28, height: 28 }} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <IoHomeOutline />
            <span className="d-none d-md-block">Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <IoIosSearch />
            <span className="d-none d-md-block">Explore</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <IoIosNotificationsOutline />
            <span className="d-none d-md-block">Notifications</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <IoMailOutline />
            <span className="d-none d-md-block">Messages</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <PiUsersFourLight />
            <span className="d-none d-md-block">Communities</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <IoBookmarksOutline />
            <span className="d-none d-md-block">Bookmarks</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <IoIosList />
            <span className="d-none d-md-block">Lists</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts" className="d-flex align-items-center gap-1">
            <FaUser />
            <span className="d-none d-md-block">Profile</span>
          </NavLink>
        </NavItem>
      </Nav>
      <div className="d-flex flex-column gap-2">
        <PrimaryButtonReverse
          text={windowWidth < 768 ? "+" : "Create post"}
          action={openNewPostModal}
        />
        <UserBar />
      </div>

      <MainModal isOpen={isOpenModal} onClose={closeNewPostModal}>
        <NewPostModal onClose={closeNewPostModal} />
      </MainModal>
    </div>
  );
};
export default NavBar;
