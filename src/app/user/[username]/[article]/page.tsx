'use client';
import React from 'react';
import UserArticleLists from "@/components/UserArticleLists";

interface UserArticlePageProps {
    params:{
        article:string;
    }
}
function UserArticlePage({params}:UserArticlePageProps) {
    console.log("article params: ",params);
    return (
        <UserArticleLists text={`i am ${params.article}`}/>
    );
}

export default UserArticlePage;