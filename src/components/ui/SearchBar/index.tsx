import React from "react";
import { Input, Image, Flex } from "@chakra-ui/react";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <Flex position="relative" width={{ base: "300px", sm: "400px" }} m="0 auto">
      <Input
        placeholder={placeholder ? placeholder : "검색어를 입력하세요"}
        size="md"
        width={{ base: "300px", sm: "400px" }}
      />
      <Image src="/assets/search.svg" alt="" width="20px" position="absolute" right="10px" top="25%" cursor="pointer" />
    </Flex>
  );
};
