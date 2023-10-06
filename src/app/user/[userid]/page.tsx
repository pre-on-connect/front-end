import React from 'react';
import {Flex, VStack} from "@chakra-ui/react";
import UserProfileInfo from "@/components/UserProfileInfo";
import UserArticle from "@/components/UserArticle";

interface UserPageProps {
    params:{
        userid:string;
    }
}
function UserPage({params:{userid}}:UserPageProps) {
    console.log("userid: ",userid);
    return (
        <Flex flexDirection='column' gap={[0,8,8]} px={['0','2rem','2rem']} >
            <UserProfileInfo/>
            <UserArticle userid={userid}/>
        </Flex>

    );
}

export default UserPage;