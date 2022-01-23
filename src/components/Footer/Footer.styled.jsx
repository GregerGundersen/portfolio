import styled from "styled-components";
import { colors, spacing, fonts } from "../../App.styled";
import footerWave from "../../media/wave_footer2.svg";

export const FooterStyled = styled.div`
  background-color: ${colors.bg_light};

  .footer_contact {
    position: relative;
    /* height: 100%; */

    img {
      width: 100%;
      /* height: 100%; */
      /* object-fit: cover; */
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
        color: white;

        ::placeholder {
          color: ${colors.placeholder};
        }
      }

      form {
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        #name {
          margin-bottom: 20px;
        }

        input {
          background-color: ${colors.footer_inputbg};
          border: none;
          padding: 8px 10px;
          color: white;

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
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer_socials__icons {
      height: 80px;
      width: 80px;
      background-color: ${colors.footer_blue2};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10%;

      i {
        font-size: 40px;
        color: white;
      }
    }
  }
  .copy {
    background-color: ${colors.footer_blue1};
    color: ${colors.accent_orange};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
