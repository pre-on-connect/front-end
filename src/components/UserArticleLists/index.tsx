'use client';
import React from 'react';
import {Grid} from "@chakra-ui/react";
import UserArticleCard from "@/components/ui/UserArticleCard";
import {useMediaQuery} from "@mantine/hooks";

function UserArticleLists() {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(min-width: 768px)");
    const isDesktop = useMediaQuery("(min-width: 1200px)");

    let columnsMaxWidth = 'auto';
    if(isTablet) columnsMaxWidth = '14rem';
    if(isDesktop) columnsMaxWidth = '17rem';

    return (
        <Grid width='100%' templateColumns={`repeat(auto-fill, minmax(7rem, ${columnsMaxWidth}))`} gap={1} placeContent='center center' placeItems='center center'>
            <UserArticleCard/>
            <UserArticleCard/>
            <UserArticleCard/>
            <UserArticleCard/>
        </Grid>

    );
}

export default UserArticleLists;