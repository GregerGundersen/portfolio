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
            <input type="text" id="name" placeholder="Name"></input>
            <input type="text" id="email" placeholder="E-mail"></input>
          </form>
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
      <div className="footer_socials">
        <div className="footer_socials__icons">
          <a href="https://www.linkedin.com/in/greger-gundersen-5a9771213/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer_socials__icons">
          <a href="https://www.facebook.com/greger.gundersen/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="footer_socials__icons">
          <a href="https://www.instagram.com/rggundersen/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer_socials__icons">
          <a href="https://github.com/GregerGundersen">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="copy">
        <p>&#169; Greger Gundersen 2022</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
