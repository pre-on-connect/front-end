'use client';
import React from 'react';
import {Divider, Flex, Tab, TabIndicator, TabList} from "@chakra-ui/react";
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
            <TabList

                width='100%'
                height='4rem'
                borderBottom='1px solid #cdcccc'
            >
                <Flex
                    position='relative'
                    justifyContent='space-around'
                    width={isMobile ? '100%':'50%'}
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
                    <TabIndicator
                        position='absolute'
                        top='100%'
                        zIndex='10'
                        mt="-1.5px"
                        height=".2rem"
                        bg="primary"
                        borderRadius="1px"
                    />
                </Flex>
            </TabList>
        </>

    );
}

export default UserArticleNav;