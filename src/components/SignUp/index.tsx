'use client';
import React, {useState} from 'react';
import {
    Avatar, Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Image,
    Input
} from "@chakra-ui/react";
import CustomPageHeader from "@/components/ui/CustomPageHeader";
import {Form, Formik} from "formik";
import * as Yup from 'yup';

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

    return (
        <Flex flexDirection='column'  width='80%' height="100vh" m='0 auto' p='2rem 3rem' boxShadow='0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
'>
            <CustomPageHeader title='회원 가입'/>
            <Flex align='center' height="100%" justifyContent='space-around' px='20rem'>
                <Flex height='80%' flexDirection='column' align='center'>
                    {profileImage ? (
                        <Image src={profileImage} alt="" width="50px" height="50px" objectFit="contain"
                               cursor="pointer"/>
                    ) : (
                        <Avatar borderRadius="full" width="12rem" height="12rem" cursor="pointer"></Avatar>
                    )}
                    <Button size='lg' my='2rem' borderRadius='lg' bgColor='tertiary' color='white' fontSize='1.2rem' _hover={{bgColor:'tertiary'}}>사진 업로드</Button>

                </Flex>
                <Box alignSelf='self-start'>
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
                            ({errors, touched}) => (
                                <Form>
                                    <FormControl isInvalid={errors.userId && touched.userId} color='gray_dark_4'
                                                 mb='2.8rem'>
                                        <Flex alignItems='baseline' pl='.3rem'>
                                            <FormLabel htmlFor='userId' fontSize='1.15rem'>사용자 ID</FormLabel>
                                            <FormHelperText>사용자 ID를 입력하세요</FormHelperText>
                                        </Flex>
                                        <Input id='userId' type='text'/>
                                        {/*{errors.userId && <FormErrorMessage>{errors.userId}</FormErrorMessage>}*/}
                                    </FormControl>
                                    <FormControl isInvalid={errors.email && touched.email} color='gray_dark_4'
                                                 mb='2.8rem'>
                                        <Flex alignItems='baseline' pl='.3rem'>
                                            <FormLabel htmlFor='email' fontSize='1.15rem'>이메일</FormLabel>
                                            <FormHelperText>이메일을 입력하세요</FormHelperText>
                                        </Flex>
                                        <Input id='email' type='text'/>
                                        {/*{errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}*/}
                                    </FormControl>
                                    <FormControl isInvalid={errors.password && touched.password} color='gray_dark_4'
                                                 mb='2.8rem'>
                                        <Flex alignItems='baseline' pl='.3rem'>
                                            <FormLabel htmlFor='password' fontSize='1.15rem'>비밀번호</FormLabel>
                                            <FormHelperText>비밀번호를 입력하세요</FormHelperText>
                                        </Flex>
                                        <Input id='password' type='text'/>
                                        {/*{errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}*/}
                                    </FormControl>
                                    <FormControl isInvalid={errors.passwordConfirm && touched.passwordConfirm}
                                                 color='gray_dark_4' >
                                        <Flex alignItems='baseline' pl='.3rem'>
                                            <FormLabel htmlFor='passwordConfirm' fontSize='1.15rem'>비밀번호 확인</FormLabel>
                                            <FormHelperText>비밀번호를 재입력 하세요</FormHelperText>
                                        </Flex>
                                        <Input id='passwordConfirm' type='text'/>
                                        {/*{errors.passwordConfirm &&*/}
                                        {/*    <FormErrorMessage>{errors.passwordConfirm}</FormErrorMessage>}*/}
                                    </FormControl>
                                </Form>
                            )
                        }
                    </Formik>

                </Box>
            </Flex>
            {/*<Box flexBasis='8rem'  m='0 auto' >*/}
            {/*    <Button type='submit' bgColor='primary' color='white' size='lg' fontSize='1.5rem' _hover={{bgColor:'primary'}}>가입하기</Button>*/}
            {/*</Box>*/}
        </Flex>
    );
}

export default SignUp;