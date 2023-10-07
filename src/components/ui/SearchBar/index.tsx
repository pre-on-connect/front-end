import React from "react";
import {Input, Image, Flex} from "@chakra-ui/react";

interface SearchBarProps {
    placeholder?: string;
    size?: 'lg' | 'md';
}

const customSearchBarSize = {
    'lg': {base: "300px", sm: "400px"},
    'md': {base: "320px", sm: "360px", md:'280px', lg:'360px'}
}

export const SearchBar = ({placeholder, size = 'lg'}: SearchBarProps) => {
    return (
        <Flex position="relative" width={customSearchBarSize[size]} m="0 auto">
            <Input
                placeholder={placeholder ? placeholder : "검색어를 입력하세요"}
                size="md"
                width={customSearchBarSize[size]}
            />
            <Image src="/assets/search.svg" alt="" width="20px" position="absolute" right="10px" top="25%"
                   cursor="pointer"/>
        </Flex>
    );
};
