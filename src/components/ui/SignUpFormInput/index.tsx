import React from 'react';
import {Button, Flex, FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";

interface UserFormInputProps {
    name: string;
    type: string;
    label?: string;
    helperText?: String;

    error?: string;
    touched?: boolean;
}

function SignUpFormInput({name, type, label, helperText, touched, error}: UserFormInputProps) {
    return (
        <FormControl isInvalid={error && touched} color='gray_dark_4' mb={['1rem', '2.8rem', '2.8rem']}>
            <Flex alignItems='baseline' pl='.3rem'>
                <FormLabel htmlFor={name} fontSize={['.95rem', '1.15rem', '1.15rem']}>
                    {label}
                </FormLabel>
                {helperText && <FormHelperText fontSize={['.8rem', '1rem', '1rem']}>{helperText}</FormHelperText>}
            </Flex>
            <Flex alignItems='baseline' justifyContent='space-between' >
                <Input id={name} type={type} size={['sm','md','md']}/>
                {name === 'userId' && <Button size='sm' mx='.5rem' px='1rem' bgColor='secondary' color='white' lineHeight='baseline'>중복 확인</Button>}
            </Flex>

            {/*{errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}*/}
        </FormControl>
    );
}

export default SignUpFormInput;