import React from "react";
import { SkillsStyled } from "./Skills.styled";
import { spacing, colors } from "../../App.styled";
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
        <img src={htmllogo}></img>
        <img src={csslogo}></img>
        <img src={jslogo}></img>
        <img src={reactlogo}></img>
        <img src={gitlogo}></img>
        <img src={figmalogo}></img>
      </div>
    </SkillsStyled>
  );
};
