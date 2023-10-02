import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ArticleCard, CustomModal } from "../ui";
import ArticleDetail from "../ArticleDetail";

const ArticleList = () => {
  // 나중에 실제 게시글 리스트 props로 넘겨주기
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

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
      <CustomModal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <ArticleDetail />
      </CustomModal>
      <ArticleCard onClick={() => handleModalOpen()} />
      <ArticleCard onClick={() => handleModalOpen()} />
      <ArticleCard onClick={() => handleModalOpen()} />
    </Box>
  );
};

export default ArticleList;
