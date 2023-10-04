'use client';
import React, {useRef} from 'react';
import {Tab, TabList} from "@chakra-ui/react";
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
        <TabList>
            {
                userArticleNavMenu.map(v => {
                    return <Tab key={v.id}><Link href={pathNameRef.current + v.url}>{v.name}</Link></Tab>;
                })
            }
        </TabList>
    );
}

export default UserArticleNav;