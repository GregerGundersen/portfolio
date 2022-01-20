import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const ProjectsStyled = styled.div`
  height: 100vh;
  background-color: ${colors.bg_dark};
  padding: ${spacing.margin};

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .proj {
    width: 30vh;
    height: 30vh;
    background-color: black;
  }
`;
