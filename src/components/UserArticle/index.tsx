'use client';

import React, {useState} from 'react';
import {TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {ReactNodeChildren} from "@/utils/types";
import UserArticleNav from "@/components/UserArticleNav";

interface UserArticleProps {
    userid:string;
}
function UserArticle({userid}:UserArticleProps) {
    const [tabIndex, setTabIndex] = useState(0);

    // todo - tabIndex로 article 목록 가져오기

    return (
        <Tabs align='center' variant='unstyled' defaultIndex={0} onChange={(index) => {
            console.log("index: ",index);
            setTabIndex(index)
        }}>
            <UserArticleNav/>
            <TabPanels>
                <TabPanel border='1px solid red'>
                    {userid}
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default UserArticle;