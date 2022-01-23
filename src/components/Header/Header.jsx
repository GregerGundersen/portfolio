import React, { useState, useEffect, useRef } from "react";
import { HeaderStyled } from "./Header.styled";
import NET from "vanta/src/vanta.net";

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
  return (
    <HeaderStyled ref={myRef}>
      <h1>
        Hello, I'm <span className="accent">Greger!</span>
      </h1>
      <h1>I'm a frontend-developer in training</h1>
      <div className="learnMore">
        <h2>Learn more</h2>
        <i className="fas fa-arrow-right"></i>
      </div>
    </HeaderStyled>
  );
};

export default Header;
