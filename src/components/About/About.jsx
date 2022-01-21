import { AboutStyled } from "./About.styled";

export const About = () => {
  return (
    <AboutStyled>
      <h1 className="title">About</h1>
      <div className="aboutCont">
        <div className="image">
          <img
            src={require("../../media/profile_picture.jpg")}
            alt="Me and my dog"
          ></img>
        </div>
        <div className="bio">
          <h2>Bio</h2>
          <p>
            I was born in Bærum, but grew up and have lived the majority of my
            life in Arendal. After finishing high school and one year military
            service I was unsure about what I wanted to do with my life so for a
            time I lived in Oslo and worked different jobs.
          </p>
          <p>
            I’ve always been fascinated by technology and even as a child I
            liked to pick apart computers and see how they worked. About 2 years
            ago I decided I wanted an education and started my training as a
            frontend-developer. Since then I have never looked back and find my
            self constantly being curious about new and exciting things to
            learn. I love a challenge and approach all things with optimism and
            determination!{" "}
          </p>
          <p>
            In my spare time you can find me skiing, fishing, gaming or relaxing
            at home with my girlfriend and a beer.
          </p>
        </div>
      </div>
    </AboutStyled>
  );
};
