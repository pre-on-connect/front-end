import React from 'react';
import {Heading} from "@chakra-ui/react";

interface CustomPageHeaderProps {
    title:string;
}

function CustomPageHeader({title}:CustomPageHeaderProps) {
    return (
        <Heading
            as='h1'
            size={['lg','lg','xl','2xl']}
            boxShadow='0px 10px 5px -10px rgba(0,0,0,0.19);'
            color='gray_dark_4'
            p={['.3rem 1rem .3rem','1rem 1rem 1.3rem','1rem 1rem 1.3rem']}
            m={['0 0 0','0 0 5rem','0 0 5rem']}
        >
            {title}
        </Heading>
    );
}

export default CustomPageHeader;