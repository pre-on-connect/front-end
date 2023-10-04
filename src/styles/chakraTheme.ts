"use client";

import {extendTheme, StyleFunctionProps} from "@chakra-ui/react";
import {theme as customTheme} from "./theme";

export const chakraTheme = extendTheme({
    colors: {
        primary: customTheme.color.primary,
        secondary: customTheme.color.secondary,
        tertiary: customTheme.color.tertiary,
        gray_light_1: customTheme.color.gray_light_1,
        gray_light_2: customTheme.color.gray_light_2 /* 모바일 - 회원님을 위한 추천 border*/,
        gray_light_3: customTheme.color.gray_light_3,
        gray_light_4: customTheme.color.gray_light_4,
        gray_light_5: customTheme.color.gray_light_5,
        gray_light_6: customTheme.color.gray_light_6,
        gray_light_7: customTheme.color.gray_light_7,
        gray_dark_1: customTheme.color.gray_dark_1,
        gray_dark_2: customTheme.color.gray_dark_2,
        gray_dark_3: customTheme.color.gray_dark_3,
        gray_dark_4: customTheme.color.gray_dark_4,
        red: customTheme.color.red,
        blue: customTheme.color.blue,
        backdrop: customTheme.color.backdrop,
    },
    shadows: {
        blur_4: customTheme.shadow.blur_4 /* 모바일/태블릿 게시글 검색 버튼 */,
        blur_8: customTheme.shadow.blur_8,
        blur_10: customTheme.shadow.blur_10,
        blur_20: customTheme.shadow.blur_20,
    },
    fonts: {
        heading: 'InstagramSans',
        body: 'InstagramSans'
    },
    breakpoints: {
        sm: '47.9rem',
        md: '48rem',
        lg: '75rem'
    },
    components: {
        Button: {
            variants: {
                'primary-basic': {
                    bgColor: 'primary',
                    color: 'white',
                    _hover: {
                        bgColor: 'primary',
                        color: 'white',
                    }
                },
                'secondary-basic': {
                    bgColor: 'secondary',
                    color: 'white',
                    _hover: {
                        bgColor: 'secondary',
                        color: 'white',
                    }
                },
                'tertiary-basic': {
                    bgColor: 'tertiary',
                    color: 'white',
                    _hover: {
                        bgColor: 'tertiary',
                        color: 'white',
                    }
                },
                'gray-basic': {
                    bgColor: 'gray_light_1',
                    color: 'gray_dark_4',
                    _hover: {
                        bgColor: 'gray_light_1',
                        color: 'gray_dark_4',
                    }
                },
                'gray-hover': {
                    bgColor: 'gray_light_1',
                    color: 'gray_dark_4',
                    _hover: (props: StyleFunctionProps) => ({
                        bgColor: props.hoverBgColor,
                        color: 'white'
                    })
                },
                'trans-basic': (props: StyleFunctionProps) => ({
                    bgColor: 'transparent',
                    color: props.color || 'gray_dark_4',
                    _hover: {
                        bgColor: 'transparent',
                        color: props.color || 'gray_dark_4'
                    }
                }),
                'trans-hover': {
                    bgColor: 'transparent',
                    color: (props: StyleFunctionProps) => props.color,
                    _hover: (props: StyleFunctionProps) => ({
                        bgColor: 'transparent',
                        color: props.hoverColor,
                        fontWeight: 'bold'
                    })
                },
            }

        }
    }
});
