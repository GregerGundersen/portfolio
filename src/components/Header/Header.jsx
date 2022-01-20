import React from "react";
import { HeaderStyled } from "./Header.styled";
import NET from "vanta/src/vanta.net";

class Header extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <HeaderStyled ref={this.vantaRef}>
        <h1>
          Hello, I'm <span className="accent">Greger!</span>
        </h1>
        <h1>I'm a frontend-developer in training</h1>
        <div className="learnMore">
          <h2>Learn more</h2>
          <i class="fas fa-arrow-right"></i>
        </div>
      </HeaderStyled>
    );
  }
}

export default Header;

// const Header = () => {
//   return (
//     <HeaderStyled>
//       <h1>Hello</h1>
//     </HeaderStyled>
//   );
// };

// export default Header;
