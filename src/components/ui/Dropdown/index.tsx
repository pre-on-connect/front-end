"use client";

import React, { ReactElement, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { articleModalTypeAtom } from "@/store";
import { useSetRecoilState } from "recoil";
import { CustomModal } from "..";
import ArticleEditorModal from "@/components/ArticleEditorModal";
import {useModal} from "@/hooks/useModal";

interface DropdownProps {
  menuItems: string[];
  icon?: ReactElement;
}

export const Dropdown = ({ menuItems, icon }: DropdownProps) => {
  const setArticleModalType = useSetRecoilState(articleModalTypeAtom);

  const handleArticleModalType = (name?: string) => {
    if (name === "수정하기") {
      setArticleModalType("modify");
    }
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const {isModalOpen, openModal, closeModal} = useModal();

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <>
      <CustomModal isOpen={isModalOpen} handleModalClose={() => closeModal()}>
        <ArticleEditorModal />
      </CustomModal>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={icon ? icon : <HamburgerIcon />}
          background="none"
          p="0"
          _hover={{ backgroundColor: "none", opacity: "0.6" }}
          _active={{ backgroundColor: "none" }}
        />
        <MenuList zIndex="10" minW="150px">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleArticleModalType(item);
                openModal();
              }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
