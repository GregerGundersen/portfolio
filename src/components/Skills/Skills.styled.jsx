import styled from "styled-components";
import { spacing, colors, fonts } from "../../App.styled";

export const SkillsStyled = styled.div`
  background-color: ${colors.bg_light};
  padding: ${spacing.margin};
  height: 100vh;

  .title {
    position: relative;
    text-align: center;
    margin: ${spacing.title_main};
    font-size: ${fonts.titleSize};
    margin-top: 0;
    padding-top: 60px;
  }

  .title::after {
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

  .skills_icons {
    display: flex;
    justify-content: space-between;

    img {
      height: 80px;
    }
  }
`;
