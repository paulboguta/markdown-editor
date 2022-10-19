import "styled-components";

declare module "styled-components" {
  export interface ITheme {
    background: string;
    markdownHeader: string;
    markdownHeaderText: string;
    markDownText: string;
    previewText: string;
    header: string;
    borderLeftPreview: string;
    orange: string;
    orangeHover: string;
  }
}
