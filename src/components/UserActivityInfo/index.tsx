'use client';
import React from 'react';
import {Button, HStack, Stack, StackDirection} from "@chakra-ui/react";
import {CustomModal} from "@/components/ui";
import {useModal} from "@/hooks/useModal";
import Followers from "@/components/Followers";
import Followings from "@/components/Followings";

interface UserActivityInfoProps {
    isMobile: boolean | undefined;
}

function UserActivityInfo({isMobile}: UserActivityInfoProps) {
    const {
        isModalOpen: isFollowerOpen,
        openModal: openFollowerModal,
        closeModal: closeFollowerModal
    } = useModal();

    const {
        isModalOpen: isFollowingOpen,
        openModal: openFollowingModal,
        closeModal: closeFollowingModal
    } = useModal();

    const subStackProps = {
        direction: isMobile ? 'column' : 'row' as StackDirection,
        color: 'gray_dark_4',
        fontWeight: 'inherit',
        gap: 1,
        align: 'center'
    }

    return (
        <>
            <HStack
                width='100%'
                height={isMobile ? '4rem' : 'auto'}
                justify={isMobile ? 'center' : 'start'}
                gap={isMobile ? 20 : 8}
                fontSize={isMobile ? '.875rem' : '1rem'}
                lineHeight='1.2rem'
                borderY={isMobile ? '1px solid #d9d9d9' : 'none'}
            >
                <Stack {...subStackProps}>
                    <span>게시물</span>
                    <strong>4</strong>
                </Stack>
                <Stack
                    {...subStackProps}
                    as={Button}
                    variant='trans-basic'
                    onClick={() => openFollowerModal()}
                >
                    <span>팔로워</span>
                    <strong>4</strong>
                </Stack>
                <Stack
                    {...subStackProps}
                    as={Button}
                    variant='trans-basic'
                    onClick={() => openFollowingModal()}
                >
                    <span>팔로잉</span>
                    <strong>4</strong>
                </Stack>
            </HStack>
            <CustomModal isOpen={isFollowerOpen} handleModalClose={() => closeFollowerModal()} size='sm'>
                <Followers/>
            </CustomModal>
            <CustomModal isOpen={isFollowingOpen} handleModalClose={() => closeFollowingModal()} size='sm'>
                <Followings/>
            </CustomModal>
        </>
    );
}

export default UserActivityInfo;