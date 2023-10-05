import React from 'react';
import {Grid} from "@chakra-ui/react";
import UserArticleCard from "@/components/ui/UserArticleCard";

function UserArticleLists() {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={1}>
            <UserArticleCard/>
            <UserArticleCard/>
            <UserArticleCard/>
            <UserArticleCard/>
        </Grid>

    );
}

export default UserArticleLists;