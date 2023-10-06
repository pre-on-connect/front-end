import React from 'react';
import {Button, HStack, Stack} from "@chakra-ui/react";

interface UserActivityInfoProps {
    isMobile:boolean | undefined;
}

function UserActivityInfo({isMobile}:UserActivityInfoProps) {

    const subDirection = isMobile ? 'column' : 'row';

    return (
        <HStack
            fontSize={isMobile ? '.875rem' : '1rem'}
            lineHeight='1.2rem'
            gap={isMobile ? 20 : 8}
            justify='center'
            borderY={isMobile ? '1px solid #d9d9d9' :'none'}
            height={isMobile ? '4rem':'auto'}
        >
            <Stack direction={subDirection} color='gray_dark_4' fontWeight='inherit' gap={1} align='center'>
                <span>게시물</span>
                <strong>4</strong>
            </Stack>
            <Stack direction={subDirection} as={Button} variant='trans-basic' fontSize='inherit' fontWeight='inherit' gap={1} align='center'>
                <span>팔로워</span>
                <strong>4</strong>
            </Stack>
            <Stack direction={subDirection} as={Button} variant='trans-basic' fontSize='inherit' fontWeight='inherit' gap={1} align='center'>
                <span>팔로잉</span>
                <strong>4</strong>
            </Stack>
        </HStack>
    );
}

export default UserActivityInfo;