'use client';
import React from 'react';
import {Avatar, Button, Flex, Image, Stack, Text, VStack} from "@chakra-ui/react";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";
import {useMediaQuery} from "@mantine/hooks";
import GeneralDropDown from "@/components/ui/GeneralDropdown";
import {CustomMouseEvent} from "@/utils/types";
import UserActivityInfo from "@/components/user/UserActivityInfo";
import {usePathname} from "next/navigation";
import {Link} from "@chakra-ui/next-js";

function UserProfileInfo() {
    const pathname = usePathname();

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
        <Flex flexDirection='column' align='center'>
            <Flex
                height={isMobile ? '8rem':'16rem'}
                justifyContent='space-around'
                align='center'
                width='80%'
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
                    <Stack direction='row' spacing={isMobile ? 2 : 4} align='center' justify='center'>
                        <Flex align='center' justify='space-between' width={isMobile ? '5rem':'9rem'}>
                            <Text as='b' height='1.2rem'>
                                test_id
                            </Text>
                            {
                                isMobile ?
                                    <GeneralDropDown menuItems={['프로필 편집', '회원 탈퇴']}
                                                     onClickMenuItemHandler={onClickMobileMenuItemHandler}/>
                                    :
                                    <Button as={Link} href={`${pathname}/edit`} variant='primary-basic' size={isMobile ? 'xs' : 'sm'}>
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
                    {!isMobile && <UserActivityInfo isMobile={isMobile}/>}
                    {!isMobile && <Button variant='tertiary-basic' size='sm'>회원 탈퇴</Button>}
                </VStack>
            </Flex>
            {isMobile && <UserActivityInfo isMobile={isMobile}/>}
        </Flex>
    );
}

export default UserProfileInfo;