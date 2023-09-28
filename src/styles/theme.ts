export const theme = {
    color: {
        primary: '#102eeb',
        secondary: '#021bbf',
        tertiary: '#6270CC',
        gray_light_1: '#f2f2f3',
        gray_light_2: '#eeeeee', /* 모바일 - 회원님을 위한 추천 border*/
        gray_light_3: '#e8e8e8',
        gray_light_4: '#dddddd',
        gray_light_5: '#dbdbdb',
        gray_light_6: '#d9d9d9',
        gray_light_7: '#CDCCCC',
        gray_dark_1: '#777',
        gray_dark_2: '#605F5F',
        gray_dark_3: '#555',
        gray_dark_4: '#212121',
        red: '#ED4956',
        blue: '#0095F6',
        backdrop: '#00000080'
    },
    shadow: {
        blur_4: 'box-shadow: 0px 4px 4px 0px #00000040', /* 모바일/태블릿 게시글 검색 버튼 */
        blur_8: '0px 4px 8px 0px #00000040',
        blur_10: '0px 4px 10px 0px #00000040'
    },
    radius:{
        sm:'16px',
        md: '30px',
        lg:'60px'
    },
    screenSize:{ /* 1200px : 75rem 767px: 47.9rem 768px:48rem 1199px: 74.9rem  and (max-width: 74.9rem)*/
        mobile:'(max-width: 47.9rem)',
        tablet:'(min-width: 48rem)',
        pc:'(min-width: 75rem)'
    }
}