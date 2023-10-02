import React from "react";
import { Flex, Box, Image, Avatar, Text } from "@chakra-ui/react";

interface CommentProps {
  profileImage?: string;
  nickName?: string;
  width?: string;
  height?: string;
  isWriter?: boolean;
}

export const Comment = ({ profileImage, nickName, width, height, isWriter }: CommentProps) => {
  return (
    <Flex alignItems="flex-start" p="5px 0">
      {profileImage ? (
        <Image
          src={profileImage}
          alt=""
          width={width ? width : "30px"}
          height={height ? height : "30px"}
          objectFit="contain"
          cursor="pointer"
        />
      ) : (
        <Avatar
          borderRadius="full"
          width={width ? width : "30px"}
          height={height ? height : "30px"}
          cursor="pointer"
        ></Avatar>
      )}
      <Box maxWidth="450px" fontSize="14px" ml="10px" overflowWrap="break-word">
        <Text as="span" fontWeight="bold" mr="5px" cursor="pointer">
          {nickName}
        </Text>
        <Text as="span">
          해당 계정의 댓글 내용입니다. 해당 계정의 댓글 내용입니다.입니다. 해당 계정의 댓글 내용입니다 입니다. 해당
          계정의 댓글 내용입니다 ss asd asf
        </Text>
        <Flex fontSize="11px" color="gray_dark_1" alignItems="center">
          2023.09.01
          {isWriter ? (
            <Flex fontSize="12px" color="gray_dark_1" ml="10px">
              <Text cursor="pointer" mr="5px">
                수정
              </Text>
              <Text as="span" cursor="pointer">
                삭제
              </Text>
            </Flex>
          ) : (
            ""
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
