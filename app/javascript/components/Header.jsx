import React, { useState } from "react";
import MainModal from "./MainModal";
import NewPostModal from "./NewPostModal";
import { PrimaryButtonReverse } from "./Buttons";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openNewPostModal = () => {
    setIsOpenModal(true);
  };
  const closeNewPostModal = () => setIsOpenModal(false);

  return (
    <>
      <PrimaryButtonReverse text="Create post" action={openNewPostModal} />
      <MainModal isOpen={isOpenModal} onClose={closeNewPostModal}>
        <NewPostModal onClose={closeNewPostModal} />
      </MainModal>
    </>
  );
};
export default Header;
