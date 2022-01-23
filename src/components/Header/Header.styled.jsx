import styled from "styled-components";
import { colors } from "../../App.styled";

export const HeaderStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  p {
    font-size: 60px;
    color: white;
  }

  .accent {
    color: ${colors.accent_orange};
  }

  .learnMore {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    color: white;
    border: 2px solid white;
    margin-top: 50px;
    cursor: pointer;

    i {
      margin-left: 10px;
      font-size: 20px;
    }
  }
`;
