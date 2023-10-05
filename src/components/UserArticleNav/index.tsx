'use client';
import React, {useEffect, useRef} from 'react';
import {Button, Divider, Tab, TabIndicator, TabList} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {usePathname} from "next/navigation";

const userArticleNavMenu = [
    {
        id: 1,
        name: '게시물',
        url: '/'
    },
    {
        id: 2,
        name: '좋아요 한 글',
        url: '/liked'
    },
    {
        id: 3,
        name: '댓글 단 글',
        url: '/commented'
    }
]

function UserArticleNav() {
    const pathNameRef = useRef(usePathname());


    return (
        <>
            <TabList justifyContent='space-around' width='80%'>
                {
                    userArticleNavMenu.map(v => {
                        return <Tab key={v.id} color='gray_dark_1' _selected={{color:'gray_dark_4', fontWeight:600}}>{v.name}</Tab>;
                    })
                }
            </TabList>
            <TabIndicator
                position='relative'
                zIndex='10'
                mt="-1.5px"
                height=".2rem"
                bg="primary"
                borderRadius="1px"
            />
            <Divider position='relative' zIndex='0' borderColor='gray_light_7'/>
        </>

    );
}

export default UserArticleNav;