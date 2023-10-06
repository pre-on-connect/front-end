import React, {MouseEventHandler, ReactElement} from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

interface GeneralDropDownProps {
    menuItems: string[];
    icon?: ReactElement;
    onClickMenuItemHandler: MouseEventHandler;
}

function GeneralDropDown({menuItems, icon, onClickMenuItemHandler}: GeneralDropDownProps) {
    return (
        <>
            <Menu matchWidth={true}>
                <MenuButton
                    as={Button}
                    background="none"
                    p="0"
                    _hover={{backgroundColor: "none", opacity: "0.6"}}
                    _active={{backgroundColor: "none"}}
                >
                    <HamburgerIcon/>
                </MenuButton>
                <MenuList zIndex="10" minW="150px">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={onClickMenuItemHandler}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
}

export default GeneralDropDown;