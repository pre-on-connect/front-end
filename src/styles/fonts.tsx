'use client';
import {Global} from '@emotion/react'

const Fonts = () => (
    <Global styles={`
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
    `}/>
);

export default Fonts