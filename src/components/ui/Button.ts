'use client';

import styled from "styled-components";

export const Button = styled.button<{$fill?:string}>`
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({theme, $fill}) => theme.color[$fill || 'gray_light_1']};
  color: ${({$fill}) => !$fill ? 'black' : 'white'};
  text-align: center;
  cursor: pointer;
`;