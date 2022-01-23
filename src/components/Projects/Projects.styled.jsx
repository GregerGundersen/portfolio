import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const ProjectsStyled = styled.div`
  min-height: 100vh;
  background-color: ${colors.bg_dark};
  padding: ${spacing.margin};
  /* 
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  } */

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 4fr));
  }

  .proj {
    width: 30vh;
    height: 30vh;
    background-color: black;
  }
`;
