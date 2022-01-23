import { ProjectsStyled } from "./Projects.styled";
import Project from "../Project/Project";
import bookFilter from "../../media/book_filter.png";
import diceGame from "../../media/dice_game.png";
import shoeShop from "../../media/shoe_shop_sp.png";
import homeDecor from "../../media/home_decor.png";

export const Projects = () => {
  return (
    <ProjectsStyled>
      <h1 className="title">Projects</h1>
      <div className="grid">
        <Project source={bookFilter} alt="Book filtering page"></Project>
        <Project source={diceGame} alt="A dice rolling game"></Project>
        <Project
          source={shoeShop}
          alt="An e-commerce shoe shop I made for my semester project"
        ></Project>
        <Project
          source={homeDecor}
          alt="A home decor website I made for my design class"
        ></Project>
      </div>
    </ProjectsStyled>
  );
};
