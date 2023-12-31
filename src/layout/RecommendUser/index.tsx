import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { UserProfileItem } from "@/components/ui";

export const RecommendUser = () => {
  return (
    <Box w="100%" height="100vh" p="30px" borderLeft="1px solid #CDCCCC">
      <Box color="#777" fontSize="20px" fontWeight="semibold" mb="30px">
        회원님을 위한 추천
      </Box>
      <Box>
        <UserProfileItem nickName="사람 1" isFollowing={false} />
        <UserProfileItem nickName="사람 2" isFollowing={false} />
        <UserProfileItem nickName="사람 3" isFollowing={false} />
      </Box>
    </Box>
  );
};
