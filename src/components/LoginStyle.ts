'use client';

import styled from "styled-components";

export const LoginForm = styled.div`
  width: 26.625rem;
  height: 39.063rem;
  margin: 2rem auto;
  border: 1px solid ${({theme}) => theme.color.gray_light_5};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.25rem 2.875rem;
  & > :first-child{
    margin-bottom:3rem;
  }
  & > :not(:first-child):not(:last-child) {
    margin-bottom:1.5rem;
  }
  @media ${({theme}) => theme.screenSize.mobile} {
    border: none;
  }

  @media ${({theme}) => theme.screenSize.tablet} {
  }

  @media ${({theme}) => theme.screenSize.pc} {

  }

  & h1 {
    color: ${({theme}) => theme.color.primary};
    margin-bottom:3rem;
  }
  
  & .signUpFindPw{
    width:100%;
    padding:0 3.3rem;
    display: flex;
    justify-content: space-around;
    font-size:.9rem;
    & li {
      list-style: none;
      color:${({theme}) => theme.color.gray_dark_1};
      &:not(:nth-of-type(2)){
        cursor:pointer;
        color:${({theme}) => theme.color.gray_dark_4};
        &:hover{
          color:${({theme}) => theme.color.primary};
          font-weight:600;
        }
      }
      
    }
  }
`;