'use client';

import styled from "styled-components";

export const LoginForm = styled.div`
  width: 26.625rem;
  margin: 4rem auto;
  border: 1px solid ${({theme}) => theme.color.gray_light_5};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.25rem 2.875rem;

  & h1 {
    color: ${({theme}) => theme.color.primary};
    margin-bottom: 3rem;
  }

  & > .inputs, & > .logins {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > .inputs {
    margin-bottom:1.2rem;
  }
 
  & > .inputs > :not(:last-child) {
    margin-bottom: 1.2rem;
  }

  & > .logins {
    margin-top:2.4rem;
    & > :not(:last-child){
      margin-bottom:1.2rem;
    }
  }

  & .signUpFindPw {
    width: 100%;
    padding: 0 3.45rem;
    display: flex;
    justify-content: space-around;
    font-size: .9rem;

    & li {
      list-style: none;
      &:nth-of-type(2){
        color: ${({theme}) => theme.color.gray_dark_1};
      }
    }
  }

  @media ${({theme}) => theme.screenSize.mobile} {
    border:none;
  }
`;
