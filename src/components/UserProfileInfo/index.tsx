'use client';
import React, {MouseEventHandler, MouseEvent} from 'react';
import {Avatar, Box, Button, Flex, Image, Stack, VStack, Text, HStack} from "@chakra-ui/react";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";
import {useMediaQuery} from "@mantine/hooks";
import GeneralDropDown from "@/components/ui/GeneralDropdown";
import {CustomMouseEvent} from "@/utils/types";

function UserProfileInfo() {
    const isMobile = useMediaQuery("(max-width: 767px)");

    // todo - 사용자정보 조회 코드 추가
    const profileImage = null;
    const profileImageWH = ['5rem', '8rem', '12rem'];

    function onClickMobileMenuItemHandler({target}: CustomMouseEvent<HTMLButtonElement>) {
        if ((target as Node).textContent === '회원 탈퇴') {
            console.log("회원 탈퇴");
        }

        if ((target as Node).textContent === '프로필 편집') {
            console.log('프로필 편집');
        }
    }

    return (
        <Flex
            align='center'
            justifyContent='space-around'
            p={isMobile ? '2rem 0' : '3rem 2rem'}
        >
            {profileImage ? (
                <Image
                    src={profileImage}
                    alt="User profile image"
                    width={profileImageWH}
                    height={profileImageWH}
                    objectFit="contain"
                />
            ) : (
                <Avatar
                    borderRadius="full"
                    width={profileImageWH}
                    height={profileImageWH}
                />
            )}
            <VStack
                width={isMobile ? '12rem' : '30rem'}
                flexBasis={isMobile ? 'auto' : '20rem'}
                align={isMobile ? 'space-between' : 'start'}
                spacing={isMobile ? 2 : 6}
                justify='center'
            >
                <Stack direction='row' spacing={isMobile ? 2 : 4} align='center'>
                    <Flex align='center' justifyContent='center'>
                        <Text as='b' fontSize={isMobile ? '1rem' : '1.2rem'} height='1.2rem'>
                            test_id
                        </Text>
                        {
                            isMobile ?
                                <GeneralDropDown menuItems={['프로필 편집', '회원 탈퇴']}
                                                 onClickMenuItemHandler={onClickMobileMenuItemHandler}/>
                                :
                                <Button variant='primary-basic' size={isMobile ? 'xs' : 'sm'}>
                                    프로필 편집
                                </Button>
                        }
                    </Flex>
                    <Button
                        variant='trans-basic'
                        color='tertiary'
                        size={isMobile ? 'sm' : 'md'}
                        fontWeight='bold'
                        alignItems='center'
                    >
                        <FiLogOut size='1rem'/>
                        <Text ml='.25rem'>로그아웃</Text>
                    </Button>
                </Stack>
                <HStack fontSize={isMobile ? '.875rem' : '1rem'} lineHeight='1.2rem' gap={isMobile ? 4 : 8}>
                    <HStack color='gray_dark_4' fontWeight='inherit' gap={1}>
                        <span>게시물</span>
                        <strong>4</strong>
                    </HStack>
                    <HStack as={Button} variant='trans-basic' fontSize='inherit' fontWeight='inherit' gap={1}>
                        <span>팔로워</span>
                        <strong>4</strong>
                    </HStack>
                    <HStack as={Button} variant='trans-basic' fontSize='inherit' fontWeight='inherit' gap={1}>
                        <span>팔로잉</span>
                        <strong>4</strong>
                    </HStack>
                </HStack>

                {!isMobile && <Button variant='tertiary-basic' size='sm'>회원 탈퇴</Button>}
            </VStack>
        </Flex>
    );
}

export default UserProfileInfo;