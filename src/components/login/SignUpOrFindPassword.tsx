'use client';

import React from 'react';
import Modal from "@/components/ui/Modal";
import styled from "styled-components";
import {Button} from "@/components/ui/Button";
import {FcGoogle} from "react-icons/fc";
import {RiKakaoTalkFill} from "react-icons/ri";
import {NavButton} from "@/components/ui/NavButton";

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
                        <NavButton>회원 가입</NavButton>
                    </Modal.Open>
                    <Modal.Window name='signup-option'>
                        <StyledSignUpOption>
                            <Button><FcGoogle className='icon'/> Google 계정으로 가입</Button>
                            <Button><RiKakaoTalkFill className='icon'/>카카오 계정으로 가입</Button>
                            <Button>이메일로 가입</Button>
                        </StyledSignUpOption>
                    </Modal.Window>
                </li>
                <li>&#124;</li>
                <li><NavButton>비밀번호 찾기</NavButton></li>
            </ul>
        </Modal>

    );
}

export default SignUpOrFindPassword;