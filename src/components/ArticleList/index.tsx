import React from "react";
import { Box } from "@chakra-ui/react";
import { ArticleCard } from "../ui";

const ArticleList = () => {
  // 나중에 실제 게시글 리스트 props로 넘겨주기
  return (
    <Box
      width="100%"
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
