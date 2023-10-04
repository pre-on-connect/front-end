'use client';
import React from 'react';
import {Avatar, Box, Button, Flex, Image} from "@chakra-ui/react";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";

function UserProfileInfo() {

    // todo - 사용자정보 조회 코드 추가
    const profileImage = null;
    return (
            <Flex>
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
                <Flex flexDirection='column'>
                    <Flex>
                        <Box>test_id</Box>
                        <Button bgColor='primary' color='white'>프로필 편집</Button>
                        <Flex color='tertiary' cursor='pointer'>
                            <FiLogOut/>
                            <Box>로그아웃</Box>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Box color='gray_dark_4'>
                            게시물 <strong>4</strong>
                        </Box>
                        <Button variant='ghost' color='gray_dark_4' _hover={{bgColor:'transparent'}}>
                            팔로워 <strong>4</strong>
                        </Button>
                        <Button variant='ghost' color='gray_dark_4' _hover={{bgColor:'transparent'}}>
                            팔로잉 <strong>4</strong>
                        </Button>
                    </Flex>
                    <Button bg='tertiary' color='white'>회원 탈퇴</Button>
                </Flex>
            </Flex>
    );
}

export default UserProfileInfo;