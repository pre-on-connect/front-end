"use client";

import React, { useState } from "react";
import { searchTypeAtom } from "@/store";
import { useSetRecoilState } from "recoil";
import { Box, Flex, Image } from "@chakra-ui/react";
import { UserProfileItem, SearchBar } from "../ui";

const SearchUser = () => {
  const setSearchType = useSetRecoilState(searchTypeAtom);

  const handleSearchType = (type: string) => {
    setSearchType(type);
  };

  const [keyword, setKeyword] = useState("");

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
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={{ base: "300px", sm: "400px" }}
        m="0 auto 10px auto"
      >
        <Box fontSize={{ base: "24px", sm: "36px" }} fontWeight="semibold">
          회원 검색
        </Box>
        <Image
          src="/assets/search_article.svg"
          alt=""
          width="40px"
          cursor="pointer"
          _hover={{ opacity: 0.6 }}
          onClick={() => handleSearchType("article")}
        />
      </Flex>
      <SearchBar />
      {keyword === "" ? (
        <Box mt="20px" width={{ base: "300px", sm: "400px" }} m="15px auto">
          <Box color="#777" fontSize="20px" fontWeight="semibold" mb="30px">
            회원님을 위한 추천
          </Box>
          <UserProfileItem nickName="abcd" isRecommend />
          <UserProfileItem nickName="abcd" isRecommend />
          <UserProfileItem nickName="abcd" isRecommend />
        </Box>
      ) : (
        <Box mt="20px" width={{ base: "300px", sm: "400px" }} m="15px auto">
          <UserProfileItem nickName="abcd" />
          <UserProfileItem nickName="abcd" />
          <UserProfileItem nickName="abcd" />
        </Box>
      )}
    </Box>
  );
};

export default SearchUser;
