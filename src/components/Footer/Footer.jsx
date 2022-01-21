import { FooterStyled } from "./Footer.styled";
import footerBg from "../../media/wave_footer2.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer_contact">
        <img className="bgWaves" src={footerBg} alt="background waves"></img>
        <h2 className="title">Contact</h2>
        <div className="form">
          <form>
            <input type="text" id="name" placeholder="name"></input>
            <input type="text" id="email" placeholder="email"></input>
          </form>
          <textarea placeholder="message"></textarea>
        </div>
      </div>
      <div className="footer_socials">
        <div className="footer_socials__icons">
          <a href="https://www.linkedin.com/in/greger-gundersen-5a9771213/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer_socials__icons">
          <a href="https://www.facebook.com/greger.gundersen/">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="footer_socials__icons">
          <a href="https://www.instagram.com/rggundersen/">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer_socials__icons">
          <a href="https://github.com/GregerGundersen">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
