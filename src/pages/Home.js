import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Kole</h2>
        <div className="prompt">
          <p>
            As a software developer, you will find me to be an individual with a
            strong enthusiasm for both expanding my knowledge and producing
            innovative work.
          </p>
          <a href="https://www.linkedin.com/in/kole-dallam-316033223/">
            <LinkedInIcon />
          </a>
          <a href="mailto:kolejasonD@gmail.com">
            <MailIcon />
          </a>
          <a href="https://github.com/00LEEE">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM, BootStrap, Yarn,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, Docker, Insomnia.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C#, C, C++, TypeScript.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
