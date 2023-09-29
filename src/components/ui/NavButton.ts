'use client';

import styled from "styled-components";
import {Button} from "@/components/ui/Button";

export const NavButton = styled(Button)`
  width: fit-content;
  height:fit-content;
  background-color: transparent;
  border-radius: 0;
  &:hover{
    color: ${({theme}) => theme.color.primary};
    font-weight:600;
  }
  
`