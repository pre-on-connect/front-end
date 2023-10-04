import React from "react";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";

interface FloorImageUploadButtonProps {
  imgPreview: string[];
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploadButton = ({ imgPreview, onImageUpload }: FloorImageUploadButtonProps) => {
  return (
    <Box>
      <Input type="file" id="file" display="none" onChange={onImageUpload} />
      <Box>
        <Button
          as="label"
          htmlFor="file"
          cursor={"pointer"}
          w="160px"
          h="120px"
          border="1px solid #DDDDDD"
          borderRadius="10px"
          backgroundColor="#FFFFFF"
          _hover={{ background: "#FFFFFF" }}
          boxShadow=" 0px 0px 4px rgba(0, 0, 0, 0.25)"
        >
          <Box>
            <Image src="/assets/add_article_image.svg" alt="" width="40px" mb="10px" />
            <Text textAlign="center" mt="4px" color="#868E96">
              {imgPreview?.length || 0} / 10
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
