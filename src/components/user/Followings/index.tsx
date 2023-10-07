import React from 'react';
import {Flex, Heading, Text} from "@chakra-ui/react";
import {SearchBar, UserProfileItem} from "@/components/ui";

function Followings() {
    return (
        <Flex flexDirection='column' align='center' justify='space-between'>
            <Text
                as='h3'
                width='100%'
                size='lg'
                height='3.5rem'
                textAlign='center'
                lineHeight='4rem'
                borderBottom='1px solid #dbdbdb'
                color='gray_dark_4'
                fontWeight='bold'
                fontSize='1.4rem'
            >
                팔로잉
            </Text>
            <Flex m='1.5rem 0 1rem'>
                <SearchBar placeholder='사용자 ID 또는 이메일을 입력하세요' size='md'/>
            </Flex>
            <Flex width='100%' maxHeight='20rem' flexDirection='column' px='1.8rem' align='center' overflowY='auto'>
                <Flex width='100%'  flexDirection='column' >
                    <UserProfileItem  isFollowing={true} nickName='사용자1'/>
                    <UserProfileItem  isFollowing={true} nickName='사용자2'/>
                    <UserProfileItem  isFollowing={true} nickName='사용자3'/>
                    <UserProfileItem  isFollowing={true} nickName='사용자4'/>
                </Flex>
                <Flex width='100%' flexDirection='column'>
                    <Heading size='md' m='1.5rem 0 1rem'>회원님을 위한 추천</Heading>
                    <Flex flexDirection='column'>
                        <UserProfileItem isFollowing={true} nickName='사용자1'/>
                        <UserProfileItem isFollowing={true} nickName='사용자1'/>
                        <UserProfileItem isFollowing={true} nickName='사용자1'/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Followings;