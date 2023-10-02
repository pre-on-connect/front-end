"use client";

import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@mantine/hooks";
import { MobileHeader, BottomMenu, SideMenu, RecommendUser } from "@/layout";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  if (isDesktop) {
    return (
      <Flex>
        <Box width="20%">
          <SideMenu />
        </Box>
        <Box width="50%" height="100vh">
          {children}
        </Box>
        <Box width="30%">
          <RecommendUser />
        </Box>
      </Flex>
    );
  } else if (isTablet || isMobile) {
    return (
      <Flex flexDirection="column" position="relative">
        <MobileHeader />
        <Box height="calc(100vh - 150px)">{children}</Box>
        <BottomMenu />
      </Flex>
    );
  }
};
