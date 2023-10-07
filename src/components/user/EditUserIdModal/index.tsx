'use client';
import React, {useState} from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import UserFormInput from "@/components/ui/SignUpFormInput";
import {CustomModal} from "@/components/ui";
import {validationAlert} from "@/utils/common";

export interface EditUserModalProps {
    isOpen: boolean;
    closeModal: () => void;
    initialValue: string;
}

function EditUserIdModal({isOpen, closeModal, initialValue}: EditUserModalProps) {
    const [userId, setUserId] = useState('');
    const [isIdUnique, setIsIdUnique] = useState(true);

    function onClickConfirmHandler() {
        // Todo - 아이디 validation 추가
        if (!validationAlert(userId === '', 'ID를 입력하세요')) return;

        if (!validationAlert(isIdUnique, '아이디 중복 확인을 완료해주세요')) return;

        // Todo - 아이디 업데이트

        closeModal();
    }

    function onClickCheckIdHandler() {
        // Todo - 아이디 validation 추가
        if (!validationAlert(userId === '', 'ID를 입력하세요')) return;

        // Todo - 아이디 중복확인 api
        setIsIdUnique(true);
    }

    return (
        <CustomModal size='sm' isOpen={isOpen} handleModalClose={closeModal}>
            <Flex flexDirection='column' align='center' justify='space-between'>
                <Text
                    as='h3'
                    width='100%'
                    size='lg'
                    height='3.5rem'
                    textAlign='center'
                    lineHeight='4rem'
                    borderBottom='1px solid #dbdbdb'
                    color='gray_dark_4'
                    fontWeight='bold'
                    fontSize='1.4rem'
                >
                    ID 수정하기
                </Text>
                <Flex width='100%'
                      height='15rem'
                      flexDirection='column'
                      align='center'
                      justify='center'
                      px='1.8rem'
                >
                    <UserFormInput
                        type='text'
                        name='userId'
                        label='새로운 ID'
                        helperText='~자리 아이디 입력'
                        placeholder={initialValue}
                        value={userId}
                        onChangeHandler={(e) => setUserId(e.target.userId)}
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
                    />
                    <Flex m='.5rem'>
                        <Button type='button' variant='primary-basic' mr='.5rem' size='md'>확인</Button>
                        <Button type='button' variant='gray-basic' size='md' onClick={() => closeModal()}>취소</Button>
                    </Flex>
                </Flex>
            </Flex>
        </CustomModal>
    );
}

export default EditUserIdModal;