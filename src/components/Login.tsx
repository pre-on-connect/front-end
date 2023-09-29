import {LoginForm} from "@/components/LoginStyle";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";


function Login() {
    return (
        <LoginForm>
            <h1>PreOn Connect</h1>
            <div className='inputs'>
                <Input type='text' placeholder='사용자 ID 또는 이메일'/>
                <Input type='password' placeholder='비밀번호'/>
            </div>
            <ul className='signUpFindPw'>
                <li>회원 가입</li>
                <li>&#124;</li>
                <li>비밀번호 찾기</li>
            </ul>
            <div className='logins'>
                <Button $fill='primary'>로그인</Button>
                <Button >Google 계정으로 로그인</Button>
                <Button >카카오 계정으로 로그인</Button>
            </div>
        </LoginForm>
    );
}

export default Login;