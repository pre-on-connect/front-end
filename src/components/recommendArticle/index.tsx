"use client";

import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const RecommendArticle = () => {
  // 임시
  const articleList = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/400",
    "https://picsum.photos/200/500",
  ];

  return (
    <Box width={{ base: "300px", sm: "400px" }} height="calc(100% - 30px)" m="30px auto" overflowY="auto">
      <Box fontSize={{ base: "24px", sm: "36px" }} fontWeight="semibold" mb="20px">
        추천 게시글
      </Box>
      <Flex flexWrap="wrap" gap="1">
        {articleList.map((article, index) => (
          <Image
            key={index}
            src={article}
            alt=""
            width={{ base: "95px", sm: "195px" }}
            height={{ base: "95px", sm: "195px" }}
            cursor="pointer"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default RecommendArticle;
