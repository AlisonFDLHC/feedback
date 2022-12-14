import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: #1c1c1c;
    }

    body {
        background: rgb(176,222,219);
        background: linear-gradient(0deg, rgba(176,222,219,1) 0%, rgba(178,255,255,1) 100%);
        max-width: 100vw;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default GlobalStyle;
