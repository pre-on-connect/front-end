import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Box, Flex, Image, Textarea, Button } from "@chakra-ui/react";
import { ImageUploadButton } from "../ui";
import { useRecoilState } from "recoil";
import { articleImagesAtom } from "@/store";

const ArticleEditorModal = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [articleImages, setArticleImages] = useRecoilState(articleImagesAtom);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 10 * 1024 * 1024) {
        alert("파일 용량이 너무 큽니다. 각 이미지는 최대 10MB까지 업로드 가능합니다.");
        continue;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);
      fileReader.onloadend = () => {
        setArticleImages((prevImages) => {
          if (prevImages.length >= 16) {
            alert("최대 업로드 가능한 이미지 수는 총 16개입니다.");
            return prevImages;
          } else {
            if (e.target.files) {
              const formData = new FormData();
              formData.append("file", e.target.files[0]);

              // api 요청
              e.target.value = "";
            }

            return [...prevImages, fileReader.result as string];
          }
        });
      };
    }
  };

  const handleImageRemove = (index: number) => {
    setArticleImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  if (isMobile) {
    return (
      <Box height="100vh" p="20px" position="relative">
        <Box fontSize="24px" fontWeight="semibold" mb="15px" width="90%">
          게시글 업로드
        </Box>
        <Flex mb="12px" overflowX="scroll">
          <ImageUploadButton imgPreview={articleImages} onImageUpload={handleImageUpload} />
          <Flex alignItems="center">
            {articleImages &&
              articleImages.map((image, index) => (
                <Box key={index} position="relative" minWidth="160px" maxWidth="160px" h="120px" ml="12px">
                  <Image
                    src={articleImages[index]}
                    alt=""
                    key={index}
                    w="100%"
                    h="100%"
                    border="1px solid #DDDDDD"
                    borderRadius="10px"
                    boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
                    objectFit="contain"
                    position="relative"
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    borderRadius="10px"
                    backgroundColor="transparent"
                  />
                  <Box position="absolute" bottom="0" right="0" cursor="pointer">
                    <Image
                      src="/assets/remove_image_button.svg"
                      alt=""
                      width="50px"
                      onClick={() => handleImageRemove(index)}
                      _hover={{ opacity: 0.6 }}
                    />
                  </Box>
                </Box>
              ))}
          </Flex>
        </Flex>
        <Textarea placeholder="내용을 입력하세요" resize="none" height="200px" mb="10px" />
        <Box># 나중에 태그를 입력할 공간입니다.</Box>
        <Button position="absolute" bottom="20px" right="20px">
          업로드하기
        </Button>
      </Box>
    );
  } else {
    return (
      <Box height="100%" p="20px" position="relative">
        <Box fontSize="24px" fontWeight="semibold" mb="15px">
          게시글 업로드
        </Box>
        <Flex mb="12px" overflowX="scroll">
          <ImageUploadButton imgPreview={articleImages} onImageUpload={handleImageUpload} />
          <Flex alignItems="center">
            {articleImages &&
              articleImages.map((image, index) => (
                <Box key={index} position="relative" minWidth="160px" maxWidth="160px" h="120px" ml="12px">
                  <Image
                    src={articleImages[index]}
                    alt=""
                    key={index}
                    w="100%"
                    h="100%"
                    border="1px solid #DDDDDD"
                    borderRadius="10px"
                    boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
                    objectFit="contain"
                    position="relative"
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    borderRadius="10px"
                    backgroundColor="transparent"
                  />
                  <Box position="absolute" bottom="0" right="0" cursor="pointer">
                    <Image
                      src="/assets/remove_image_button.svg"
                      alt=""
                      width="50px"
                      onClick={() => handleImageRemove(index)}
                      _hover={{ opacity: 0.6 }}
                    />
                  </Box>
                </Box>
              ))}
          </Flex>
        </Flex>
        <Textarea placeholder="내용을 입력하세요" resize="none" height="200px" mb="10px" />
        <Box># 나중에 태그를 입력할 공간입니다.</Box>
        <Button position="absolute" bottom="20px" right="20px">
          업로드하기
        </Button>
      </Box>
    );
  }
};

export default ArticleEditorModal;
