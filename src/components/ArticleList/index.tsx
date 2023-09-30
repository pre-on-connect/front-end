import React from "react";
import { Box } from "@chakra-ui/react";
import { ArticleCard } from "../ui";

const ArticleList = () => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
      pb={{ base: "10px", sm: "50px" }}
    >
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Box>
  );
};

export default ArticleList;
