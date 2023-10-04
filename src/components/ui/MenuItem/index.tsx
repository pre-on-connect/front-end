import React from "react";
import Link from "next/link";
import { Box, Flex, Image } from "@chakra-ui/react";

interface MenuItemProps {
  title: string;
  icon?: string;
  width?: string;
  height?: string;
  url?: string;
  onClick?: () => void;
}

export const MenuItem = ({ title, icon, width, height, url, onClick }: MenuItemProps) => {
  return (
    <Link href={url ? url : "#"}>
      <Flex width={width ? width : "100%"} height={height} alignItems="center" onClick={onClick}>
        <Image src={icon} alt="" width="25px" mr="12px" />
        <Box fontSize="20px">{title}</Box>
      </Flex>
    </Link>
  );
};
