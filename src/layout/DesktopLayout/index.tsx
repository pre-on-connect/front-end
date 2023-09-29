import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideMenu from "../SideMenu";
import RecommendUser from "../RecommendUser";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  return (
    <Flex>
      <Box w="20%">
        <SideMenu />
      </Box>
      <Box w="50%">{children}</Box>
      <Box w="30%">
        <RecommendUser />
      </Box>
    </Flex>
  );
};

export default DesktopLayout;
