'use client';
import React from 'react';
import {Avatar, Box, Button, Flex, Image, Stack, VStack} from "@chakra-ui/react";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";

function UserProfileInfo() {

    // todo - 사용자정보 조회 코드 추가
    const profileImage = null;
    return (
            <Flex justifyContent='space-around' p={['2rem 0','3rem 2rem','3rem 2rem']}>
                {profileImage ? (
                    <Image
                        src={profileImage}
                        alt="User profile image"
                        width={['4.5rem', '8rem', '12rem']}
                        height={['4.5rem', '8rem', '12rem']}
                        objectFit="contain"
                        cursor="pointer"
                    />
                ) : (
                    <Avatar
                        borderRadius="full"
                        width={['4.5rem', '8rem', '12rem']}
                        height={['4.5rem', '8rem', '12rem']}
                        cursor="pointer"/>
                )}
                <VStack flexBasis='20rem' align='start' spacing={6} justify='center'>
                    <Stack direction='row' spacing={[2,4,4]} align='center'>
                        <Box fontSize={['1rem','1.2rem','1.2rem']} fontWeight='bold' >test_id</Box>
                        <Button variant='primary-basic' size={['xs','sm','sm']} >프로필 편집</Button>
                        <Button variant='trans-basic' size={['sm','md','md']} color='tertiary' leftIcon={<FiLogOut />} fontWeight='bold' p='0'>
                            로그아웃
                        </Button>
                    </Stack>
                    <Flex align='center' justifyContent='space-between'>
                        <Box color='gray_dark_4' fontWeight='600' pr='1rem'>
                            게시물<strong style={{marginLeft:'.25rem'}}>4</strong>
                        </Box>
                        <Button variant='trans-basic'>
                            팔로워<strong style={{marginLeft:'.25rem'}}>4</strong>
                        </Button>
                        <Button variant='trans-basic'>
                            팔로잉<strong style={{marginLeft:'.25rem'}}>4</strong>
                        </Button>
                    </Flex>
                    <Button variant='tertiary-basic' size='sm'>회원 탈퇴</Button>
                </VStack>
            </Flex>
    );
}

export default UserProfileInfo;