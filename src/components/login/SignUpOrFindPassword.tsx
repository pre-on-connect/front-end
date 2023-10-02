'use client';

import React from 'react';
import Modal from "@/components/ui/Modal";
import styled from "styled-components";
import {StyledLink} from "@/components/ui/StyledLink";
import {StyledLinkNoBg} from "@/components/ui/StyledLinkNoBg";
import {Link} from "@chakra-ui/next-js";
import {FcGoogle} from "@react-icons/all-files/fc/FcGoogle";
import {RiKakaoTalkFill} from "@react-icons/all-files/ri/RiKakaoTalkFill";

const StyledSignUpOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 1.2rem;

  & > * {
    background-color: ${({theme}) => theme.color.gray_light_1};
    &:hover{
      background-color: ${({theme}) => theme.color.primary};
      color:white;
    }
  }
  
  & > :not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

function SignUpOrFindPassword() {
    return (
        <Modal>
            <ul className='signUpFindPw'>
                <li>
                    <Modal.Open opens='signup-option'>
                        <StyledLinkNoBg href='#'>회원 가입</StyledLinkNoBg>
                    </Modal.Open>
                    <Modal.Window name='signup-option'>
                        <StyledSignUpOption>
                            <StyledLink href='#'><FcGoogle className='icon'/> Google 계정으로 가입</StyledLink>
                            <StyledLink href='#' ><RiKakaoTalkFill className='icon'/>카카오 계정으로 가입</StyledLink>
                            <StyledLink href='/signUp' >이메일로 가입</StyledLink>
                        </StyledSignUpOption>
                    </Modal.Window>
                </li>
                <li>&#124;</li>
                <li><StyledLinkNoBg href='/findPw'>비밀번호 찾기</StyledLinkNoBg></li>
            </ul>
        </Modal>

    );
}

export default SignUpOrFindPassword;