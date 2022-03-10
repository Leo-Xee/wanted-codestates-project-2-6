import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  /* colors */
  :root {
    --primary: #FF8450;
    --text: #5B5555;
    --text-disabled: #D3D2D2;
    --btn-disabled: #E2E2E2;
    --bg-form: #F6F6F6;
  }
  /* reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html {font-size: 62.5%;}
  html, body {width: 100%; height:100%; max-width:360px; margin: 0 auto; background-color: #F7F7FB; color: #5B5555}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
  * {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
`;

export default GlobalStyle;
