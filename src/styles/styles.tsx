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

export const themeDark = {
  background: "#151619",
  markdownHeader: "#1D1F22",
  markdownHeaderText: "#C1C4CB",
  markDownText: "#C1C4CB",
  previewText: "#fff",
  header: "#2B2D31",
  borderLeftPreview: "#5A6069",
  orange: "#E46643",
  orangeHover: "#F39765",
};

export const themeLight = {
  background: "#fff",
  markdownHeader: "#F5F5F5",
  markdownHeaderText: "#7C8187",
  markDownText: "#35393F",
  previewText: "black",
  header: "#2B2D31",
  borderLeftPreview: "#e4e4e4",
  orange: "#E46643",
  orangeHover: "#F39765",
};
