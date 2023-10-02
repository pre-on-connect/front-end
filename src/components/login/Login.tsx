import {LoginForm} from "@/components/login/LoginStyle";
import {Input} from "@/components/ui/Input";
import {StyledLink} from "@/components/ui/StyledLink";
import SignUpOrFindPassword from "@/components/login/SignUpOrFindPassword";
import {Box} from "@chakra-ui/react";
import React from "react";
import {FcGoogle} from "@react-icons/all-files/fc/FcGoogle";
import {RiKakaoTalkFill} from "@react-icons/all-files/ri/RiKakaoTalkFill";


function Login() {
    return (

        <LoginForm>
                <Box color="primary" fontSize="32px" fontWeight="semibold" mb="100px">
                    PreOn Connect
                </Box>
                <div className='inputs'>
                    <Input type='text' placeholder='사용자 ID 또는 이메일'/>
                    <Input type='password' placeholder='비밀번호'/>
                </div>
                <SignUpOrFindPassword/>
                <div className='logins'>
                    <StyledLink $fill='primary' href='#'>로그인</StyledLink>
                    <StyledLink  href='#'><FcGoogle className='icon'/> Google 계정으로 로그인</StyledLink>
                    <StyledLink  href='#'><RiKakaoTalkFill className='icon'/>카카오 계정으로 로그인</StyledLink>
                </div>
        </LoginForm>

    );
}

export default Login;