import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Dropdown } from "@/components/ui";

const MenuItems = ["로그아웃", "프로필 수정"];

export const MobileHeader = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" p="10px 20px" borderBottom="1px solid #CDCCCC">
      <Box fontWeight="semibold" fontSize="18px" color="primary">
        PreOn Connect
      </Box>
      <Dropdown menuItems={MenuItems} icon={<SettingsIcon />} />
    </Flex>
  );
};
