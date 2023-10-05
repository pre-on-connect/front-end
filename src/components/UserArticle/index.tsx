'use client';

import React, {useState} from 'react';
import {Center, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import UserArticleNav from "@/components/UserArticleNav";
import UserArticleLists from "@/components/UserArticleLists";

interface UserArticleProps {
    userid: string;
}

function UserArticle({userid}: UserArticleProps) {
    const [tabIndex, setTabIndex] = useState(0);

    // todo - tabIndex로 article 목록 가져와서 UserArticleLists에 넘기기

    return (
        <Tabs align='center' variant='unstyled' defaultIndex={0} onChange={(index) => {
            setTabIndex(index)
        }}>
            <UserArticleNav/>
            <TabPanels>
                <TabPanel mt='1rem'>
                    <Center>
                        <UserArticleLists/>
                    </Center>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default UserArticle;