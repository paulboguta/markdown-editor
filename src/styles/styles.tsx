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
    }

`;

export const theme = {
  dark: {
    a1000: "#151619",
    a900: "#1D1F22",
    a800: "#2B2D31",
    a700: "#35393F",
    a600: "#5A6069",
    a500: "#7C8187",
    a400: "#C1C4CB",
    a300: "#E4E4E4",
    a200: "#F5F5F5",
    a100: "#FFFFFF",
    orange: "#E46643",
    orangeHover: "#F39765",
  },
  light: {},
};
