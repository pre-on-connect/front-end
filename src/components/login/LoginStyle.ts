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
  
  & > .inputs > * {
    width: 19.750rem;
    height: 3.5rem;
  
  }
 
  & > .inputs > :not(:last-child) {
    margin-bottom: 1.2rem;
  }

  & > .logins {
    margin-top:2.4rem;
    & > * {
      width: 19.750rem;
      height: 3.5rem;
    }
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
      color: ${({theme}) => theme.color.gray_dark_1};

      &:not(:nth-of-type(2)) {
        cursor: pointer;
        color: ${({theme}) => theme.color.gray_dark_4};

        &:hover {
          color: ${({theme}) => theme.color.primary};
          font-weight: 600;
        }
      }

    }
  }

  @media ${({theme}) => theme.screenSize.mobile} {
    border:none;
    & > .inputs > * {
      width: 17rem;
      height: 2.5rem;
    }

    & > .logins > * {
      width: 17rem;
      height: 2.8rem;
    }
  }

 

 
`;