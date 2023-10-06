'use client';
import React from 'react';
import {Divider, Tab, TabIndicator, TabList} from "@chakra-ui/react";
import {useMediaQuery} from "@mantine/hooks";
import {MdDashboard} from "@react-icons/all-files/md/MdDashboard";
import {BsFillBookmarkFill} from "@react-icons/all-files/bs/BsFillBookmarkFill";
import {BiCommentDetail} from "@react-icons/all-files/bi/BiCommentDetail";

const userArticleNavMenu = [
    {
        id: 1,
        name: '게시물',
        type: 'posted',
        icon: <MdDashboard/>
    },
    {
        id: 2,
        name: '좋아요 한 글',
        type: 'liked',
        icon: <BsFillBookmarkFill/>
    },
    {
        id: 3,
        name: '댓글 단 글',
        type: 'commented',
        icon: <BiCommentDetail/>
    }
]


function UserArticleNav() {
    const isMobile = useMediaQuery("(max-width: 767px)");


    return (
        <>
            <TabList justifyContent='space-around'
                     width={isMobile ? '100%' : '50%'}
                     height='4rem'
            >
                {

                    userArticleNavMenu.map(v => {
                        return (
                            <Tab
                                key={v.id}
                                color='gray_dark_1'
                                _selected={{color: 'gray_dark_4', fontWeight: 500}}
                                fontSize={isMobile ? '2rem' : '1rem'}
                            >
                                {isMobile ? v.icon : v.name}
                            </Tab>
                        );
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