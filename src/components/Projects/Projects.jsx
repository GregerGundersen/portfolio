import { ProjectsStyled } from "./Projects.styled";

export const Projects = () => {
  return (
    <ProjectsStyled>
      <h1 className="title">Projects</h1>
      <div className="flex">
        <div className="proj"></div>
        <div className="proj"></div>
      </div>
    </ProjectsStyled>
  );
};
