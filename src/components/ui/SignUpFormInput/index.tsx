import React, {ChangeEvent} from 'react';
import {Flex, FormControl, FormHelperText, FormLabel, Input, InputGroup} from "@chakra-ui/react";

interface UserFormInputProps {
    name: string;
    type: string;
    label?: string;
    helperText?: String;
    error?: string;
    touched?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    value: string;
    onChangeHandler: (e: ChangeEvent<any>) => void;
    icon?: React.ReactElement;
    button?: React.ReactElement;
    placeholder?: string;
}

function SignUpFormInput({
                             name,
                             type,
                             label,
                             helperText,
                             placeholder = '',
                             touched,
                             error,
                             disabled = false,
                             readonly = false,
                             value,
                             onChangeHandler,
                             icon,
                             button
                         }: UserFormInputProps) {
    return (
        <FormControl isInvalid={error && touched} color='gray_dark_4' mb={['1rem', '2.8rem', '2.8rem']}>
            <Flex alignItems='baseline' pl='.3rem'>
                <FormLabel htmlFor={name} fontSize={['.95rem', '1.15rem', '1.15rem']}>
                    {label}
                </FormLabel>
                {helperText && <FormHelperText fontSize={['.8rem', '1rem', '1rem']}>{helperText}</FormHelperText>}
            </Flex>
            <InputGroup size={['sm', 'md', 'md']} alignItems='center'>
                <Input
                    id={name}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    isDisabled={disabled}
                    isReadOnly={readonly}
                    placeholder={placeholder}

                />
                {
                    icon && icon
                }
                {
                    button && button
                }
            </InputGroup>
        </FormControl>
    );
}

export default SignUpFormInput;