'use client';
import Image from 'next/image';

import styled, {css} from "styled-components";

const sizes = {
    sm: css`
      width: 2rem;
      height: 2rem;
    `,
    md: css`
      width: 5rem;
      height: 5rem;
    `,
    lg: css`
      width: 8rem;
      height: 8rem;
    `
}

const StyledProfileImage = styled(Image)<{$size:string}>`
    border: 1px solid ${({theme}) => theme.color.gray_light_3};
    border-radius: 9999px;
`