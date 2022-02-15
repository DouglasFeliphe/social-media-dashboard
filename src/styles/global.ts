import { createGlobalStyle } from "styled-components";
// import "https://fonts.google.com/specimen/Inter";
export default createGlobalStyle`
    * {
        margin: 0;
        /* padding: 0; */
        /* box-sizing: border-box; */
        font-family: 'Inter', sans-serif;
    }

    body{        
        background: '#FFF';
        font-size: 14px;
        /* color: ${(props) => props.theme.colors.text}; */
       
    }
`;
