import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const AboutStyled = styled.div`
  padding: ${spacing.margin};
  background-color: ${colors.bg_light};

  .aboutCont {
    display: flex;
    justify-content: space-between;

    .image {
      max-width: 100%;

      img {
        width: 100%;
        border-radius: 100%;
      }
    }

    .bio {
      padding: 0 200px;

      p {
        margin: 10px 0;
      }
    }
  }
`;
