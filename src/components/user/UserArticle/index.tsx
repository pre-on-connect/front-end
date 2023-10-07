'use client';

import React, {useState} from 'react';
import {Center, TabPanel, TabPanels, Tabs, VStack} from "@chakra-ui/react";
import UserArticleNav from "@/components/user/UserArticleNav";
import UserArticleLists from "@/components/user/UserArticleLists";

interface UserArticleProps {
    userid: string;
}

function UserArticle({userid}: UserArticleProps) {
    const [tabIndex, setTabIndex] = useState(0);

    // todo - tabIndex로 article 목록 가져와서 UserArticleLists에 넘기기

    return (
        <Tabs
            align='center'
            variant='unstyled'
            defaultIndex={0}
            onChange={(index) => {
            setTabIndex(index)
        }}>
            <VStack gap={2}>
                <UserArticleNav/>
                <TabPanels>
                    <TabPanel p='0'>
                        <Center>
                            <UserArticleLists/>
                        </Center>
                    </TabPanel>
                </TabPanels>
            </VStack>
        </Tabs>
    );
}

export default UserArticle;