import React from "react";
import Link from "next/link";
import { Box, Flex, Image } from "@chakra-ui/react";

interface MenuItemProps {
  title: string;
  icon?: string;
  width?: string;
  height?: string;
  url?: string;
}

export const MenuItem = ({ title, icon, width, height, url }: MenuItemProps) => {
  return (
    <Link href={url ? url : "#"}>
      <Flex width={width ? width : "100%"} height={height} alignItems="center">
        <Image src={icon} alt="" width="25px" mr="12px" />
        <Box fontSize="20px">{title}</Box>
      </Flex>
    </Link>
  );
};
