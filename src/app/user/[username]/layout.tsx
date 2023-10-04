'use client';
import React from 'react';
import {ReactNodeChildren} from "@/utils/types";
import UserProfileInfo from "@/components/UserProfileInfo";
import {Flex} from "@chakra-ui/react";
import UserArticle from "@/components/UserArticle";

interface UserDetailLayoutProps extends ReactNodeChildren {
    params: {
        username: string;
    }
}


function UserDetailLayout({children, params: {username}}: UserDetailLayoutProps) {
    // Todo - username으로 profileinfo 조회해서 UserProfileInfo에 넘기기

    return (
        <Flex flexDirection='column'>
            <UserProfileInfo/>
            <UserArticle>{children}</UserArticle>
        </Flex>
    );
}

export default UserDetailLayout;