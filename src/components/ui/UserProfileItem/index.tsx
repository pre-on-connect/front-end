import React from "react";
import { Flex, Box, Image, Avatar } from "@chakra-ui/react";
import FollowStatusButton from "@/components/ui/FollowStatusButton";

interface UserProfileItemProps {
  profileImage?: string;
  nickName?: string;
  isRecommend?: boolean;
  isDate?: string;
  isFollowing?:boolean;
}

export const UserProfileItem = ({ profileImage, nickName, isRecommend, isDate, isFollowing }: UserProfileItemProps) => {
  return (
    <Flex alignItems="center" m="10px 0">
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
      <FollowStatusButton isFollowing={isRecommend ? false : isFollowing} nickname={nickName}/>
      {/*{isRecommend && (*/}
      {/*  <Box color="blue" ml="auto" cursor="pointer">*/}
      {/*    팔로우*/}
      {/*  </Box>*/}
      {/*)}*/}
    </Flex>
  );
};
