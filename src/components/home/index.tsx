"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import ArticleList from "../ArticleList";

const HomePage = () => {
  return (
    <Box
      height="100vh"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      <ArticleList />
    </Box>
  );
};

export default HomePage;
