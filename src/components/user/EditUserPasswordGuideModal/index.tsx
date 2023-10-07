import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import UserFormInput from "@/components/ui/SignUpFormInput";
import {CustomModal} from "@/components/ui";

interface EditUserPasswordGuideModalProps {
    isOpen: boolean;
    closeModal: () => void;
}
function EditUserPasswordGuideModal({isOpen, closeModal}:EditUserPasswordGuideModalProps) {
    return (
        <CustomModal size='sm' isOpen={isOpen} handleModalClose={closeModal}>
            <Flex flexDirection='column' align='center' justify='space-between'>
                <Flex width='100%'
                      height='12rem'
                      flexDirection='column'
                      align='center'
                      justify='center'
                      px='1.8rem'
                >
                    <Text as='p' align='center'>
                        등록하신 이메일 주소로 비밀번호 변경 URL이 전송되었습니다.
                    </Text>
                    <Button type='button' variant='primary-basic' mt='1.5rem' size='md'>메일 재전송</Button>
                </Flex>
            </Flex>
        </CustomModal>
    );
}

export default EditUserPasswordGuideModal;