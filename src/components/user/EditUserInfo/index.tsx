'use client';
import React, {useState} from 'react';
import {Avatar, Button, Center, Flex, Image, InputRightElement} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import UserFormInput from "@/components/ui/SignUpFormInput";
import {useMediaQuery} from "@mantine/hooks";
import * as Yup from "yup";
import {useModal} from "@/hooks/useModal";
import {BiEdit} from "@react-icons/all-files/bi/BiEdit";
import EditUserIdModal from "@/components/user/EditUserIdModal";
import EditUserPasswordGuideModal from "@/components/user/EditUserPasswordGuideModal";
import CustomPageHeader from "@/components/ui/CustomPageHeader";
import {Link} from "@chakra-ui/next-js";

const EditUserSchema = Yup.object().shape({
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

const pathnames = [
    {
        pathname: '프로필',
        link: '/user/test_id'
    },
    {
        pathname: '프로필 수정',
        link: '/user/test_id/edit'
    }
];

function EditUserInfo() {
    const [profileImage, setProfileImage] = useState(null);
    const {isModalOpen: isEditIdModalOpen, closeModal: closeEditIdModal, openModal: openEditIdModal} = useModal();
    const {
        isModalOpen: isEditPasswordGuideOpen,
        closeModal: closeEditPasswordGuide,
        openModal: openEditPasswordGuide
    } = useModal();


    const isDesktop = useMediaQuery("(min-width: 1200px)");

    return (
        <Flex
            flexDirection='column'
            width='100%'
            maxHeight='40rem'
            m='.5rem auto'
        >
            <CustomPageHeader title='프로필 수정' paths={pathnames}/>
            <Formik
                initialValues={{
                    userId: 'test_id',
                    email: 'test_id@test.com',
                    password: '1234test',
                    passwordConfirm: '1234test'
                }}
                validationSchema={EditUserSchema}
                onSubmit={(values) => console.log(values)}
            >
                {
                    ({errors, touched, values, initialValues, handleChange}) => (
                        <Form
                            style={{
                                display:'flex',
                                flexDirection:'column',
                                minHeight:'38rem'
                            }}
                        >
                            <Flex
                                m='auto 0'
                                flexDirection={['column', 'column', 'row']}
                                align='center'
                                justifyContent='space-around'
                                px={['0', '2rem', '2rem']}
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
                                        variant='secondary-basic'
                                        size={['sm', 'lg', 'lg']}
                                        my={['.5rem', '2rem', '2rem']}
                                        fontSize={['.9rem', '1.2rem', '1.2rem']}

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
                                        value={initialValues.userId}
                                        onChangeHandler={handleChange}
                                        icon={
                                            <InputRightElement>
                                                <BiEdit
                                                    style={{cursor: 'pointer'}}
                                                    size='1.6rem'
                                                    color='#021bbf'
                                                    onClick={() => openEditIdModal()}
                                                />
                                            </InputRightElement>
                                        }
                                        readonly={true}
                                    />
                                    <UserFormInput
                                        type='text'
                                        name='email'
                                        label='이메일'
                                        helperText='이메일은 수정이 불가능합니다'
                                        disabled={true}
                                        value={initialValues.email}
                                        onChangeHandler={handleChange}
                                    />
                                    <UserFormInput
                                        type='password'
                                        name='password'
                                        label='비밀번호'
                                        touched={touched.password}
                                        error={errors.password}
                                        helperText='~자리 비밀번호 입력'
                                        value={initialValues.password}
                                        onChangeHandler={handleChange}
                                        icon={
                                            <InputRightElement>
                                                <BiEdit
                                                    style={{cursor: 'pointer'}}
                                                    color='#021bbf'
                                                    size='1.6rem'
                                                    onClick={() => openEditPasswordGuide()}
                                                />
                                            </InputRightElement>
                                        }
                                        readonly={true}
                                    />
                                </Flex>
                            </Flex>
                            <Center m='0 0 auto'>
                                <Button
                                    as={Link}
                                    href='/user/test_id'
                                    type='button'
                                    variant='primary-basic'
                                    size={['sm', 'lg', 'lg']}
                                    fontSize='1.5rem'
                                >
                                    프로필로 돌아가기
                                </Button>
                            </Center>
                            <EditUserIdModal isOpen={isEditIdModalOpen}
                                             closeModal={closeEditIdModal}
                                             initialValue={values.userId}/>
                            <EditUserPasswordGuideModal isOpen={isEditPasswordGuideOpen}
                                                        closeModal={closeEditPasswordGuide}/>
                        </Form>

                    )
                }
            </Formik>

        </Flex>
    );
}

export default EditUserInfo;