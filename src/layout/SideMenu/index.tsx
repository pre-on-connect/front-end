"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { MenuItem, CustomModal } from "@/components/ui";
import ArticleEditorModal from "@/components/ArticleEditorModal";
import { useResetRecoilState } from "recoil";
import { articleImagesAtom, articleModalTypeAtom } from "@/store";

const SideMenuItem = [
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

export const SideMenu = () => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const resetArticleImages = useResetRecoilState(articleImagesAtom);
  const resetArticleModalType = useResetRecoilState(articleModalTypeAtom);

  useEffect(() => {
    return () => {
      if (!isModalOpen) {
        resetArticleImages();
        resetArticleModalType();
      }
    };
  }, [isModalOpen]);

  return (
    <Box width="100%" height="100vh" p="30px" borderRight="1px solid #CDCCCC">
      <CustomModal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <ArticleEditorModal />
      </CustomModal>
      <Box color="primary" fontSize="32px" fontWeight="semibold" mb="100px">
        PreOn Connect
      </Box>
      <Box>
        {SideMenuItem.map((menu) => (
          <Box
            key={menu.id}
            m="20px 0"
            p="10px"
            borderRadius="10px"
            cursor="pointer"
            color={pathname === menu.url ? "white" : ""}
            fontWeight={pathname === menu.url ? "semibold" : ""}
            backgroundColor={pathname === menu.url ? "primary" : ""}
          >
            {menu.name === "만들기" ? (
              <MenuItem title={menu.name} icon={menu.icon} url={menu.url} onClick={() => handleModalOpen()} />
            ) : (
              <MenuItem title={menu.name} icon={menu.icon} url={menu.url} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
