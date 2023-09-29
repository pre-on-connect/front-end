import React from "react";
import { Box } from "@chakra-ui/react";
import { ArticleCard } from "../ui";

const ArticleList = () => {
  return (
    <Box>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Box>
  );
};

export default ArticleList;
