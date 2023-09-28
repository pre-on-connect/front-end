'use client';

import styled from "styled-components";

export const Input = styled.input`
  width: 19.750rem;
  height: 3.25rem;
  padding: .7rem 1.5rem;
  border: 1px solid ${({theme}) => theme.color.gray_light_4};
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  color: ${({theme}) => theme.color.gray_dark_4};

  & ::placeholder {
    color: ${({theme}) => theme.color.gray_dark_1};
  }
`;