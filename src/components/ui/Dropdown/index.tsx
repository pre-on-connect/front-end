"use client";

import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface DropdownProps {
  menuItems: string[];
}

export const Dropdown = ({ menuItems }: DropdownProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<HamburgerIcon />}
        background="none"
        p="0"
        _hover={{ backgroundColor: "none", opacity: "0.6" }}
        _active={{ backgroundColor: "none" }}
      />
      <MenuList zIndex="10" minW="150px">
        {menuItems.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
