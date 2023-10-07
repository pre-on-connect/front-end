import React from 'react';
import {GridItem} from "@chakra-ui/react";
import Image from 'next/image';

function UserArticleCard() {

    return (
        <GridItem
            display='inline-block'
            position='relative'
            width={['7rem', '7rem', '14rem','17rem']}
            height={['7rem', '7rem', '14rem','17rem']}
            cursor='pointer'
        >
            <Image
                src='https://picsum.photos/200/300'
                alt='User Article Photo'
                fill={true}
                sizes="(max-width: 360px) 7rem, (max-width: 767px) 7rem, (min-width: 768px) 14rem, (min-width: 1200px) 17rem"
            />
        </GridItem>
    );
}

export default UserArticleCard;