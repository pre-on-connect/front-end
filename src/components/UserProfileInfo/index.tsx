'use client';
import React from 'react';
import {Avatar, Box, Button, Flex, Image, Stack} from "@chakra-ui/react";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";

function UserProfileInfo() {

    // todo - 사용자정보 조회 코드 추가
    const profileImage = null;
    return (
            <Flex justifyContent='space-around' p='3rem 2rem'>
                {profileImage ? (
                    <Image
                        src={profileImage}
                        alt="User profile image"
                        width={['6rem', '8rem', '12rem']}
                        height={['6rem', '8rem', '12rem']}
                        objectFit="contain"
                        cursor="pointer"
                    />
                ) : (
                    <Avatar
                        borderRadius="full"
                        width={['6rem', '8rem', '12rem']}
                        height={['6rem', '8rem', '12rem']}
                        cursor="pointer"/>
                )}
                <Flex flexBasis='20rem' flexDirection='column' align='start' justifyContent='space-between'>
                    <Stack direction='row' spacing={4} align='center'>
                        <Box fontSize='1.2rem' fontWeight='bold' >test_id</Box>
                        <Button variant='primary-basic' size='sm' >프로필 편집</Button>
                        <Button variant='trans-basic' size='md' color='tertiary' leftIcon={<FiLogOut />} fontWeight='bold'>
                            로그아웃
                        </Button>
                    </Stack>
                    <Flex align='center' justifyContent='space-between'>
                        <Box color='gray_dark_4' pr='1rem'>
                            게시물 <strong>4</strong>
                        </Box>
                        <Button variant='trans-basic'>
                            팔로워 <strong>4</strong>
                        </Button>
                        <Button variant='trans-basic'>
                            팔로잉 <strong>4</strong>
                        </Button>
                    </Flex>
                    <Button variant='tertiary-basic'>회원 탈퇴</Button>
                </Flex>
            </Flex>
    );
}

export default UserProfileInfo;