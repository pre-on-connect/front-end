import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ArticleCard, CustomModal } from "../ui";
import ArticleDetail from "../ArticleDetail";
import {useModal} from "@/hooks/useModal";

const ArticleList = () => {
  // 나중에 실제 게시글 리스트 props로 넘겨주기
  // const [isModalOpen, setIsModalOpen] = useState(false);
    const {isModalOpen, openModal, closeModal} = useModal();

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <Box
      width="100%"
      height="100%"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
      pb={{ base: "10px", sm: "50px" }}
    >
      <CustomModal isOpen={isModalOpen} handleModalClose={() => closeModal()}>
        <ArticleDetail />
      </CustomModal>
      <ArticleCard onClick={() => openModal()} />
      <ArticleCard onClick={() => openModal()} />
      <ArticleCard onClick={() => openModal()} />
    </Box>
  );
};

export default ArticleList;
