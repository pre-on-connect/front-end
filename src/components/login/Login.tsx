import {LoginForm} from "@/components/login/LoginStyle";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import {FcGoogle} from "react-icons/fc";
import {RiKakaoTalkFill} from "react-icons/ri";
import SignUpOrFindPassword from "@/components/login/SignUpOrFindPassword";
import {Box} from "@chakra-ui/react";
import React from "react";


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
                    <Button $fill='primary'>로그인</Button>
                    <Button><FcGoogle className='icon'/> Google 계정으로 로그인</Button>
                    <Button><RiKakaoTalkFill className='icon'/>카카오 계정으로 로그인</Button>
                </div>
        </LoginForm>

    );
}

export default Login;