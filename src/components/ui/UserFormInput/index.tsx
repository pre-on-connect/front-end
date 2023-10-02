import React from 'react';
import {FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from "@chakra-ui/react";
import {Field, Form} from "formik";

interface UserFormInputProps {
    name: string;
    type: string;
    label?: string;
    helperText?: String;

    error?:string;
    touched?:boolean;
}

function UserFormInput({name, type, label, helperText, touched,error}: UserFormInputProps) {
    console.log("touched: ",touched);
    console.log("error: ",error);
    return (
            <Field name={name} >
                <FormControl isInvalid={error !== undefined && touched} color='gray_dark_4' >
                    {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                    <Input id={name} type={type}/>
                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                    {error && <FormErrorMessage>{error}</FormErrorMessage>}
                </FormControl>
            </Field>
    );
}

export default UserFormInput;