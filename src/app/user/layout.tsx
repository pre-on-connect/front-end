import React from 'react';
import {Layout} from "@/layout";

interface ProfileLayoutPageProps {
    children:React.ReactNode;
}

function UserLayoutPage({children}:ProfileLayoutPageProps) {
    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default UserLayoutPage;