'use client';
import React, {useState} from 'react';
import {Avatar, Box, Button, Center, Flex, Image} from "@chakra-ui/react";
import CustomPageHeader from "@/components/ui/CustomPageHeader";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import UserFormInput from "@/components/ui/SignUpFormInput";
import {useMediaQuery} from "@mantine/hooks";
import {Link} from "@chakra-ui/next-js";

const SignupSchema = Yup.object().shape({
    userId: Yup.string()
        .min(3, 'too short')
        .max(6, 'too long')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(3, 'too short')
        .max(6, 'too long')
        .required('Required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호를 확인해 주세요')
})


function SignUp() {
    const [profileImage, setProfileImage] = useState(null);
    const isDesktop = useMediaQuery("(min-width: 1200px)");

    return (
        <Flex width='100%' height='100vh' bgColor={['#fff','primary']}>
            <Flex
                flexDirection='column'
                width={isDesktop ? '80%' : '100%'}
                // maxHeight='90vh'
                m='0 auto'
                px={['.5rem','3rem']}
                boxShadow={['none', 'none', 'none', '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)']}
                bgColor='#fff'
            >
                <CustomPageHeader title='회원 가입'/>
                <Formik
                    initialValues={{
                        userId: '',
                        email: '',
                        password: '',
                        passwordConfirm: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {
                        ({errors, touched, handleChange, values}) => (
                            <Form>
                                <Flex
                                    flexDirection={['column', 'column', 'row']}
                                    align='center'
                                    justifyContent='space-around'
                                    px={['0', '2rem', '2rem', '20rem']}
                                    py={['1rem', '1rem', '2rem']}
                                >
                                    <Flex height={['auto', '80%', '80%']} flexDirection='column' align='center'>
                                        {profileImage ? (
                                            <Image
                                                src={profileImage}
                                                alt=""
                                                width={['8rem', '12rem']}
                                                height={['8rem', '12rem']}
                                                objectFit="contain"
                                                cursor="pointer"
                                            />
                                        ) : (
                                            <Avatar
                                                borderRadius="full"
                                                width={['6rem', '8rem', '12rem']}
                                                height={['6rem', '8rem', '12rem']}
                                                cursor="pointer"/>
                                        )}
                                        <Button
                                            size={['sm', 'lg', 'lg']}
                                            my={['.5rem', '2rem', '2rem']}
                                            fontSize={['.9rem', '1.2rem', '1.2rem']}
                                            variant='tertiary-basic'
                                        >
                                            사진 업로드
                                        </Button>
                                    </Flex>
                                    <Flex flexDirection='column' alignItems='center' mt='2rem'>
                                        <UserFormInput
                                            type='text'
                                            name='userId'
                                            label='사용자 ID'
                                            touched={touched.userId}
                                            error={errors.userId}
                                            helperText='~자리 아이디 입력'
                                            button={
                                                <Button
                                                    type='button'
                                                    size='sm'
                                                    px='1rem'
                                                    ml='.5rem'
                                                    variant='secondary-basic'
                                                    onClick={() => alert('중복확인')}
                                                >
                                                    중복 확인
                                                </Button>
                                            }
                                            onChangeHandler={handleChange}
                                            value={values.userId}
                                        />

                                        <UserFormInput
                                            type='text'
                                            name='email'
                                            label='이메일'
                                            touched={touched.email}
                                            error={errors.email}
                                            helperText='이메일 입력'
                                            onChangeHandler={handleChange}
                                            value={values.email}
                                        />
                                        <UserFormInput
                                            type='password'
                                            name='password'
                                            label='비밀번호'
                                            touched={touched.password}
                                            error={errors.password}
                                            helperText='~자리 비밀번호 입력'
                                            onChangeHandler={handleChange}
                                            value={values.password}
                                        />
                                        <UserFormInput
                                            type='password'
                                            name='passwordConfirm'
                                            label='비밀번호 확인'
                                            touched={touched.passwordConfirm}
                                            error={errors.passwordConfirm}
                                            helperText='비밀번호를 재입력 해주세요'
                                            onChangeHandler={handleChange}
                                            value={values.passwordConfirm}
                                        />
                                    </Flex>
                                </Flex>
                                <Center>
                                    <Button
                                        type='submit'
                                        size={['md', 'lg', 'lg']}
                                        fontSize='1.5rem'
                                        variant='primary-basic'
                                    >
                                        가입하기
                                    </Button>
                                    <Button
                                        as={Link}
                                        href='/'
                                        ml='1rem'
                                        type='button'
                                        size={['md', 'lg', 'lg']}
                                        fontSize='1.5rem'
                                        variant='gray-basic'
                                    >
                                        가입 취소
                                    </Button>
                                </Center>
                            </Form>

                        )
                    }
                </Formik>

            </Flex>
        </Flex>
    );
}

export default SignUp;