import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const colors = {
  title_main: "#444649",
  title_sub: "#000000",
  para: "#000000",
  bg_light: "#F9F9F9",
  bg_dark: "#F5F5F5",
  footer_text: "#BCBCBC",
  footer_blue1: "#1B242F",
  footer_blue2: "#252934",
  footer_inputbg: "#1E242C",
  placeholder: "#808080",
  accent_orange: "#E76F51",
};

export const spacing = {
  title_main: "30px 30px 30px 0",
  title_sub: "15px 15px 15px 0",
  divider: "100px 0",
  margin: "0 8.33%",
};

export const fonts = {
  BodyCommissioner: "'Commissioner', 'sans-serif'",
  HeaderFraunces: "Fraunces , serif",
  titleSize: "60px",
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", "sans-serif";

    h1,h2,h3,h4,h5{
      font-family: ${fonts.HeaderFraunces}
    }
    p,span,a, input, textarea, ::placeholder{
      font-family: ${fonts.BodyCommissioner}
    }

    .title{
          position: relative;
    text-align: center;
    margin: ${spacing.title_main};
    font-size: ${fonts.titleSize};
    margin-top: 0;
    padding-top: 60px;

    :after{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background: #000;
      width: 80px;
      height: 5px;
      }
    }
}
`;
