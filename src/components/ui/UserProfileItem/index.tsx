import React from "react";
import { Flex, Box, Image, Avatar } from "@chakra-ui/react";

interface UserProfileItemProps {
  profileImage?: string;
  nickName?: string;
  isRecommend?: boolean;
  isDate?: string;
}

export const UserProfileItem = ({ profileImage, nickName, isRecommend, isDate }: UserProfileItemProps) => {
  return (
    <Flex alignItems="center" m="10px 0" width="80%">
      {profileImage ? (
        <Image src={profileImage} alt="" width="50px" height="50px" objectFit="contain" cursor="pointer" />
      ) : (
        <Avatar borderRadius="full" width="50px" height="50px" cursor="pointer"></Avatar>
      )}
      <Box fontSize="18px" ml="10px" cursor="pointer">
        {nickName}
        {isDate ? (
          <Box fontSize="14px" color="gray_dark_1">
            {isDate}
          </Box>
        ) : (
          ""
        )}
      </Box>
      {isRecommend ? (
        <Box color="blue" ml="auto" cursor="pointer">
          팔로우
        </Box>
      ) : (
        ""
      )}
    </Flex>
  );
};
