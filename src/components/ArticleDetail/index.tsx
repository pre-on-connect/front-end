import React from "react";
import { Flex, Box, Input } from "@chakra-ui/react";
import { ImageCarousel, Comment } from "../ui";
import { useMediaQuery } from "@mantine/hooks";

const ArticleDetail = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  // 이후 특정 게시글을 클릭하면 해당 게시글의 이미지 혹은 내용 등읠 전역 상태에 저장해두었다가 여기에 불러옵니다.

  const imageList = ["https://picsum.photos/200/300", "https://picsum.photos/200/400", "https://picsum.photos/200/500"];
  const isWriter = true;

  if (isMobile) {
    return (
      <Flex flexDirection="column" height="100vh">
        <Box mt="50px">
          <ImageCarousel imageList={imageList} />
        </Box>
        <Box p="20px 10px">
          게시글의 본문 내용이 들어갑니다.게시글의 본문 내용이 들어갑니다.게시글의 본문 내용이 들어갑니다. 게시글의 본문
          내용이 들어갑니다. 게시글의 본문 내용이 들어갑니다. 게시글의 본문 내용이 들어갑니다.
        </Box>
        <Box overflowY="auto" flexGrow={1} p="0 10px">
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
        </Box>
        <Flex alignItems="center" justifyContent="space-between" maxWidth="475px" m="10px 0" p="0 10px">
          <Input width="85%" placeholder="댓글을 입력하세요" _placeholder={{ fontSize: "12px" }} pb="3px" />
          <Box fontSize="12px" cursor="pointer">
            게시
          </Box>
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex height="100%">
        <Box width="50%">
          <ImageCarousel
            imageList={imageList}
            height="600px"
            borderTopLeftRadius={{ base: "0", sm: "0.375rem" }}
            borderBottomLeftRadius={{ base: "0", sm: "0.375rem" }}
          />
        </Box>
        <Flex width="50%" p="10px" position="relative" flexDirection="column">
          <Box flexGrow={1} mb="20px">
            게시글의 본문 내용이 들어갑니다.게시글의 본문 내용이 들어갑니다.게시글의 본문 내용이 들어갑니다. 게시글의
            본문 내용이 들어갑니다. 게시글의 본문 내용이 들어갑니다. 게시글의 본문 내용이 들어갑니다.
          </Box>
          <Box overflowY="auto" flexGrow={1} mb="10px">
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
            <Comment width="30px" height="30px" nickName="닉네임" isWriter={isWriter} />
          </Box>
          <Flex alignItems="center" justifyContent="space-between" maxWidth="475px" mt="10px" flexGrow={1}>
            <Input width="85%" placeholder="댓글을 입력하세요" _placeholder={{ fontSize: "12px" }} pb="3px" />
            <Box fontSize="12px" cursor="pointer">
              게시
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  }
};

export default ArticleDetail;
