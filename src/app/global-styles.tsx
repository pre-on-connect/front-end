'use client';

import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: inherit;
    vertical-align: baseline;
  }

  @font-face {
    font-family: 'InstagramSans';
    font-style: normal;
    src: url('/fonts/InstagramSans.ttf') format('ttf');
  }

  @font-face {
    font-family: 'InstagramSans';
    src: url('/fonts/InstagramSans_Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'InstagramSans';
    src: url('/fonts/InstagramSans_Headline.otf') format('otf');
  }

  @font-face {
    font-family: 'InstagramSans';
    src: url('/fonts/InstagramSans_Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'InstagramSans';
    src: url('/fonts/InstagramSans_Medium.ttf') format('ttf');
  }

  body {
    box-sizing: border-box;
    font-family: "InstagramSans", sans-serif;
  }

`;



