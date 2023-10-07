import React from 'react';
import {Box, Flex, Heading,Text} from "@chakra-ui/react";
import CustomBreadcrumb, {Paths} from "@/components/ui/CustomBreadcrumb";

interface CustomPageHeaderProps {
    title:string;
    paths?:Paths;
}

function CustomPageHeader({title, paths = []}:CustomPageHeaderProps) {
    return (
            <Heading
                as='h1'
                height={['3rem','4rem','4rem','5rem']}
                display='flex'
                alignSelf='stretch'
                alignItems='center'
                size={['md','lg','lg','xl']}
                boxShadow='0px 10px 5px -10px rgba(0,0,0,0.19);'
                color='gray_dark_4'
                px='1.2rem'
            >
                <Text mt='.8rem'>{title}</Text>
                <CustomBreadcrumb paths={paths}/>
            </Heading>
    );
}

export default CustomPageHeader;