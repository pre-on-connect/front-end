'use client';
import React from 'react';
import {PageHeader} from "@/components/ui/PageHeader";
import styled from "styled-components";


const StyledSignUpPage = styled.section`
  ${({theme}) => theme.flexCol}
`;

const Contents = styled.section`
  ${({theme}) => theme.flex}
  &:first-child {
    margin-right:1rem;
  }
  &:last-child {
    margin-left: 1rem;
  }
`;


function SignUpPage() {
    return (
        <StyledSignUpPage>
            <PageHeader>회원 가입</PageHeader>
            <Contents>

            </Contents>
        </StyledSignUpPage>
    );
}

export default SignUpPage;