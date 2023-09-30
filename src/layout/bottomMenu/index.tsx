import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const ButtonMenuItem = [
  {
    id: 1,
    name: "홈",
    icon: "/assets/home.svg",
    url: "/",
  },
  {
    id: 2,
    name: "검색",
    icon: "/assets/search.svg",
    url: "/search",
  },
  {
    id: 3,
    name: "추천 게시글",
    icon: "/assets/recommend.svg",
    url: "/recommend/article",
  },
  {
    id: 4,
    name: "만들기",
    icon: "/assets/create.svg",
    url: "#",
  },
  {
    id: 5,
    name: "프로필",
    icon: "/assets/profile.svg",
    url: "/profile",
  },
];

export const BottomMenu = () => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      p={{ base: "20px", sm: "30px" }}
      position="fixed"
      bottom="0"
      mt="50px"
      borderTopLeftRadius="16px"
      borderTopRightRadius="16px"
      boxShadow="blur_20"
      zIndex="20"
      backgroundColor="#ffffff"
    >
      {ButtonMenuItem.map((menu) => (
        <Link href={menu.url ? menu.url : "#"} key={menu.id}>
          <Image src={menu.icon} alt="" width={{ base: "25px", sm: "auto" }} />
        </Link>
      ))}
    </Flex>
  );
};
