import React from 'react';
import {Flex} from "@chakra-ui/react";
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
        <Flex flexDirection='column' px='2rem'>
            <UserProfileInfo/>
            <UserArticle userid={userid}/>
        </Flex>

    );
}

export default UserPage;