import React, { useState, useEffect, useRef } from "react";
import { HeaderStyled } from "./Header.styled";
import NET from "vanta/src/vanta.net";
import { StyledLink } from "./Header.styled";

const Header = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const learnMoreScroll = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  return (
    <HeaderStyled ref={myRef}>
      <h1>
        Hello, I'm <span className="accent">Greger!</span>
      </h1>
      <h1>I'm a frontend-developer in training</h1>
      <div onClick={learnMoreScroll} className="learnMore">
        <h2>Learn more</h2>
        <i className="fas fa-arrow-right"></i>
      </div>
      <div className="navigation">
        <ul>
          <StyledLink to="/">
            <li>Home</li>
          </StyledLink>
          <StyledLink to="/my-portfolio">
            <li>Portfolio</li>
          </StyledLink>
          <StyledLink to="/about">
            <li>About</li>
          </StyledLink>
          <StyledLink to="/contact-me">
            <li>Contact</li>
          </StyledLink>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
