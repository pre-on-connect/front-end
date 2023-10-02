import React from 'react';
import {Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from "@chakra-ui/react";
import {Field, Form} from "formik";

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
        <FormControl isInvalid={error && touched} color='gray_dark_4' mb={['1rem','2.8rem','2.8rem']}>
            <Flex alignItems='baseline' pl='.3rem'>
                <FormLabel htmlFor={name} fontSize={['1rem','1.15rem','1.15rem']}>
                    {label}
                </FormLabel>
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </Flex>
            <Input id={name} type={type}/>
            {/*{errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}*/}
        </FormControl>
    );
}

export default SignUpFormInput;