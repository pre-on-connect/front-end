import React from 'react';
import {Flex, Heading} from "@chakra-ui/react";
import {SearchBar, UserProfileItem} from "@/components/ui";

function Followers() {
    return (
        <Flex maxHeight='30rem' width='20rem' flexDirection='column' align='center' justify='space-between'>
            <SearchBar placeholder='검색어를 입력하세요'/>
            <Flex maxHeight='10rem' width='14rem' flexDirection='column' overflow='auto'>
                <UserProfileItem  isFollowing={false} nickName='사용자1'/>
                <UserProfileItem  isFollowing={true} nickName='사용자2'/>
                <UserProfileItem  isFollowing={false} nickName='사용자3'/>
                <UserProfileItem  isFollowing={true} nickName='사용자4'/>
            </Flex>
            <Flex maxHeight='5rem' width='14rem' flexDirection='column'  overflow='auto'>
                <Heading size='md'>회원 추천</Heading>
                <Flex flexDirection='column'>
                    <UserProfileItem isFollowing={false} nickName='사용자1'/>
                    <UserProfileItem isFollowing={false} nickName='사용자1'/>
                    <UserProfileItem isFollowing={false} nickName='사용자1'/>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Followers;