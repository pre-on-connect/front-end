import React from 'react';
import {Divider, Flex, Heading, Text} from "@chakra-ui/react";
import {SearchBar, UserProfileItem} from "@/components/ui";

function Followers() {
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
                팔로워
            </Text>
            <Flex m='1.5rem 0 1rem'>
                <SearchBar placeholder='사용자 ID 또는 이메일을 입력하세요' size='md'/>
            </Flex>
            <Flex width='100%' maxHeight='20rem' flexDirection='column' px='1.8rem' align='center' overflowY='auto'>
                <Flex width='100%'  flexDirection='column' >
                    <UserProfileItem  isFollowing={false} nickName='사용자1'/>
                    <UserProfileItem  isFollowing={true} nickName='사용자2'/>
                    <UserProfileItem  isFollowing={false} nickName='사용자3'/>
                    <UserProfileItem  isFollowing={true} nickName='사용자4'/>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Followers;