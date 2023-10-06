"use client";

import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { UserProfileItem, ImageCarousel, Dropdown } from "..";

const MenuItems = ["수정하기", "삭제하기"];

interface ArticleCardProps {
  onClick?: () => void;
}

export const ArticleCard = ({ onClick }: ArticleCardProps) => {
  // 임시
  const isWriter = true;
  const imageList = ["https://picsum.photos/200/300", "https://picsum.photos/200/400", "https://picsum.photos/200/500"];

  return (
    <Box
      width={{ base: "300px", sm: "400px" }}
      height="600px"
      borderRadius="16px"
      boxShadow="blur_10"
      m="25px auto"
      position="relative"
      cursor="pointer"
    >
      <Flex p="10px 20px" alignItems="center" justifyContent="space-between">
        <UserProfileItem nickName="닉네임입니다" isDate="2023.09.01" showFollowStatus={false}/>
        {isWriter ? <Dropdown menuItems={MenuItems} /> : ""}
      </Flex>
      <ImageCarousel imageList={imageList} onClick={onClick} />
      <Box p="15px 20px">
        <Flex alignItems="center" fontSize="14px" mb="8px">
          <Image
            src="/assets/like_deactive.svg"
            alt=""
            mr="8px"
            width="15px"
            cursor="pointer"
            _hover={{ opacity: "0.6" }}
          />
          50
        </Flex>
        <Flex fontSize="14px" pb="10px">
          #태그 #태그 #태그
        </Flex>
        <Box pb="20px" onClick={onClick}>
          내용이 들어갈곳입니다.
        </Box>
        <Box
          color="gray_dark_1"
          fontSize="14px"
          position="absolute"
          bottom="15px"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
        >
          댓글 1개
        </Box>
      </Box>
    </Box>
  );
};
