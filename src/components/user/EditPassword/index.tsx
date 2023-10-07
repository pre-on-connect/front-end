'use client';

import React from 'react';
import {Button, Center, Flex} from "@chakra-ui/react";
import CustomPageHeader from "@/components/ui/CustomPageHeader";
import {Form, Formik} from "formik";
import UserFormInput from "@/components/ui/SignUpFormInput";
import {useMediaQuery} from "@mantine/hooks";
import * as Yup from "yup";

const EditPasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(3, 'too short')
        .max(6, 'too long')
        .required('현재 비밀번호를 입력해 주세요'),
    newPassword: Yup.string()
        .min(3, 'too short')
        .max(6, 'too long')
        .required('새 비밀번호를 입력해 주세요'),
    newPasswordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], '새 비밀번호가 일치하지 않습니다.')
        .required('새 비밀번호를 재입력 해주세요')
})

function EditPassword() {
    const isDesktop = useMediaQuery("(min-width: 1200px)");

    return (
        <Flex width='100%' height='100vh' bgColor={['#fff', 'primary']}>
            <Flex
                width={isDesktop ? '80%' : '100%'}
                flexDirection='column'
                align='center'
                m='0 auto'
                px={['.5rem', '3rem']}
                boxShadow={['none', 'none', 'none', '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)']}
                bgColor='#fff'
            >
                <CustomPageHeader title='비밀번호 수정'/>
                <Formik
                    initialValues={{
                        currentPassword: '',
                        newPassword: '',
                        newPasswordConfirm: ''
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={EditPasswordSchema}
                >
                    {
                        ({errors, touched, handleChange, values}) => (
                            <Form style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'start',
                                minHeight: '40rem',
                                margin: '4rem auto auto'
                            }}>
                                <Flex flexDirection='column' align='center' justify='center' mb='2rem'>
                                    <UserFormInput
                                        type='password'
                                        name='currentPassword'
                                        label='현재 비밀번호'
                                        touched={touched.currentPassword}
                                        error={errors.currentPassword}
                                        helperText=''
                                        onChangeHandler={handleChange}
                                        value={values.currentPassword}
                                    />
                                    <UserFormInput
                                        type='password'
                                        name='newPassword'
                                        label='새 비밀번호'
                                        touched={touched.newPassword}
                                        error={errors.newPassword}
                                        helperText='~자리 비밀번호 입력'
                                        onChangeHandler={handleChange}
                                        value={values.newPassword}
                                    />
                                    <UserFormInput
                                        type='password'
                                        name='newPasswordConfirm'
                                        label='새 비밀번호 확인'
                                        touched={touched.newPasswordConfirm}
                                        error={errors.newPasswordConfirm}
                                        helperText='새 비밀번호를 재입력 해주세요'
                                        onChangeHandler={handleChange}
                                        value={values.newPasswordConfirm}
                                    />
                                </Flex>
                                <Center>
                                    <Button
                                        type='submit'
                                        size={['md', 'lg', 'lg']}
                                        fontSize='1.5rem'
                                        variant='primary-basic'
                                    >
                                        비밀번호 수정
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

export default EditPassword;