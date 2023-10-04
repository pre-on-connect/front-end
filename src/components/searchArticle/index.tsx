"use client";

import React, { useState } from "react";
import { searchTypeAtom } from "@/store";
import { useSetRecoilState } from "recoil";
import { Box, Flex, Image } from "@chakra-ui/react";
import { SearchBar, ArticleCard, CustomModal } from "../ui";
import ArticleDetail from "../ArticleDetail";

const SearchArticle = () => {
  const setSearchType = useSetRecoilState(searchTypeAtom);

  const handleSearchType = (type: string) => {
    setSearchType(type);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Box
      width="100%"
      height="calc(100% - 30px)"
      m="30px auto"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      <CustomModal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <ArticleDetail />
      </CustomModal>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={{ base: "300px", sm: "400px" }}
        m="0 auto 10px auto"
      >
        <Box fontSize={{ base: "24px", sm: "36px" }} fontWeight="semibold">
          게시글 검색
        </Box>
        <Image
          src="/assets/search_user.svg"
          alt=""
          width="40px"
          cursor="pointer"
          _hover={{ opacity: 0.6 }}
          onClick={() => handleSearchType("user")}
        />
      </Flex>
      <SearchBar />
      <Box height="100%">
        <ArticleCard onClick={() => handleModalOpen()} />
        <ArticleCard onClick={() => handleModalOpen()} />
        <ArticleCard onClick={() => handleModalOpen()} />
        <Box height="10px" backgroundColor="transparent" />
      </Box>
    </Box>
  );
};

export default SearchArticle;
