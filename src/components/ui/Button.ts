'use client';

import styled from "styled-components";

export const Button = styled.button<{$fill?:string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.875rem;
  height: 3.813rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.1rem;
  background-color: ${({theme, $fill}) => theme.color[$fill || 'gray_light_1']};
  color: ${({$fill}) => !$fill ? 'black' : 'white'};
  text-align: center;
  cursor: pointer;
  & .icon {
    margin: 0 .5rem;
  }
  
  @media ${({theme}) => theme.screenSize.mobile}{
    width: 17rem;
    height:3rem;
    font-size:.9rem;
  }

  @media ${({theme}) => theme.screenSize.tablet}{
    width: 19rem;
    height:3.3rem;
  }
`;
