import React from "react";
import { Flex, Box, Image, Avatar } from "@chakra-ui/react";
import FollowStatusButton from "@/components/ui/FollowStatusButton";

interface UserProfileItemProps {
  profileImage?: string;
  nickName?: string;
  showFollowStatus?: boolean; // 회원 추천 & 프로필 > 팔로잉/팔로우 목록 에서는 true(default값), 일반 게시글 등에서는 false.
  isDate?: string;
  isFollowing?:boolean; // 해당 회원에 대한 팔로잉 여부
}

export const UserProfileItem = ({ profileImage, nickName, showFollowStatus = true, isDate, isFollowing }: UserProfileItemProps) => {
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
        {
            showFollowStatus && <FollowStatusButton isFollowing={isFollowing} nickname={nickName}/>
        }

      {/*{isRecommend && (*/}
      {/*  <Box color="blue" ml="auto" cursor="pointer">*/}
      {/*    팔로우*/}
      {/*  </Box>*/}
      {/*)}*/}
    </Flex>
  );
};
