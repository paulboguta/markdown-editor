import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-y: hidden;
    }

    p {
        font-size: 14px;
        line-height: 24px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Roboto Slab;
    }

    h1 {
        font-weight: 700;
        font-size: 32px;
    }
    
    h2 {
        font-weight: 300;
        font-size: 28px;
    }

    h3 {
        font-weight: 700;
        font-size: 24px;
    }

    h4 {
        font-weight: 700;
        font-size: 20px;
    }

    h5 {
        font-weight: 700;
        font-size: 16px;
    }

    h6 {
        font-weight: 700;
        font-size: 14px;
        color: #E46643;
    }

`;
