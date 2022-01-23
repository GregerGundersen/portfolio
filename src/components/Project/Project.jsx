import ProjectStyled from "./ProjectStyled";
import React, { useState } from "react";

const Project = (props) => {
  const [style, setStyle] = useState("class1");

  const hoverEnter = () => {
    console.log("Entered");
    setStyle("class2");
  };

  const hoverExit = () => {
    console.log("Exit");
    setStyle("class1");
  };

  return (
    <ProjectStyled
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverExit}
      className={style}
    >
      <img src={props.source} alt={props.alt}></img>
    </ProjectStyled>
  );
};

export default Project;
