import styled from "styled-components";
import { colors, spacing, fonts } from "../../App.styled";
import footerWave from "../../media/wave_footer2.svg";

export const FooterStyled = styled.div`
  background-color: ${colors.bg_light};

  .footer_contact {
    position: relative;

    img {
      width: 100%;
    }

    h2 {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }

    .title:after {
      background-color: white;
    }

    .form {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;

      textarea {
        background-color: ${colors.footer_inputbg};
        border: none;

        ::placeholder {
          color: ${colors.placeholder};
        }
      }

      form {
        display: flex;
        flex-direction: column;

        input {
          background-color: ${colors.footer_inputbg};
          border: none;

          ::placeholder {
            color: ${colors.placeholder};
          }
        }
      }
    }
  }

  .footer_socials {
    background-color: ${colors.footer_blue1};
    padding: ${spacing.margin};
    height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer_socials__icons {
      height: 10vh;
      width: 10vh;
      background-color: ${colors.footer_blue2};
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 40px;
      }
    }
  }
`;
