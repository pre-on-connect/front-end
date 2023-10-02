'use client';

import styled from "styled-components";
import {StyledLink} from "@/components/ui/StyledLink";

export const StyledLinkNoBg = styled(StyledLink)`
  width: fit-content;
  height:fit-content;
  background-color: transparent;
  border-radius: 0;
  &:hover{
    color: ${({theme}) => theme.color.primary};
    font-weight:600;
  }
  
`