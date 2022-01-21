import { SkillsStyled } from "./Skills.styled";
import htmllogo from "../../media/HTML5_logo_resized.svg";
import csslogo from "../../media/CSS3_logo.svg";
import jslogo from "../../media/Unofficial_JavaScript_logo_2.svg";
import reactlogo from "../../media/React-icon.svg";
import gitlogo from "../../media/Git_icon.svg";
import figmalogo from "../../media/Figma-logo.svg";

export const Skills = () => {
  return (
    <SkillsStyled>
      <h1 className="title">Skills</h1>
      <div className="skills_icons">
        <img alt="HTML Logo" src={htmllogo}></img>
        <img alt="CSS Logo" src={csslogo}></img>
        <img alt="JS Logo" src={jslogo}></img>
        <img alt="React Logo" src={reactlogo}></img>
        <img alt="Git logo" src={gitlogo}></img>
        <img alt="Figma logo" src={figmalogo}></img>
      </div>
    </SkillsStyled>
  );
};
