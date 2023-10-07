import React from 'react';
import {Grid} from "@chakra-ui/react";
import UserArticleCard from "@/components/ui/UserArticleCard";

function UserArticleLists() {
    return (
        <Grid width='100%' templateColumns='repeat(auto-fill, minmax(7rem, 17rem))' gap={1} justifyContent='center' alignItems='center'>
            <UserArticleCard/>
            <UserArticleCard/>
            <UserArticleCard/>
            <UserArticleCard/>
        </Grid>

    );
}

export default UserArticleLists;