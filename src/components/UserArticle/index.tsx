import React from 'react';
import {TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {ReactNodeChildren} from "@/utils/types";
import UserArticleNav from "@/components/UserArticleNav";

function UserArticle({children}:ReactNodeChildren) {
    return (
        <Tabs>
            <UserArticleNav/>
            <TabPanels>
                <TabPanel border='1px solid red'>
                    {children}
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default UserArticle;