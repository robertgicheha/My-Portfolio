import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Eventer"
              description=" Events management app, where an admin cretes events and the events are later displayed on the frontend for the users to register and attend the events."
              ghLink="https://github.com/robertgicheha/Events.git"
              demoLink="https://eventsview.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rick and Morty API"
              description="Rick and Morty APP that retrieves a list of locations (name and type), along with the residents of that location and their status."
              ghLink="https://github.com/robertgicheha/Rick-and-Morty-API.git"
              demoLink="https://github.com/robertgicheha/Rick-and-Morty-API.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Support Ticketing System"
              description="Support ticketing system, where a user creates a ticket and the ticket gets solved and its status code updated and viewd on the fontend."
              ghLink="https://github.com/robertgicheha/Support-Ticketing-System.git"
              demoLink="https://github.com/robertgicheha/Support-Ticketing-System.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AskPoint"
              description="A Stack Overflow clone app that allows users and guest users to ask questions and have their questions answered by other users.~"
              ghLink="https://github.com/robertgicheha/ASKPOINT-.git"
              demoLink="https://github.com/robertgicheha/ASKPOINT-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Feedbacck App"
              description="A eact app that enables a user to give feedback of a service provided, write a review and give a rating of 1-10 and display the feedback as a card on the frontend."
              ghLink="https://github.com/robertgicheha/React-Js-Feedback-App.git"
              demoLink="https://glittery-moonbeam-956eb2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="House Marketplace"
              description="A platform that lists houses for rent and sale. The house marketplace fetches the houses from the database after they are added by a user and in turn renders them on the frontend as either for sale or for rent."
              ghLink="https://github.com/robertgicheha/The-House-MarketPlace.git"
              demoLink="https://github.com/robertgicheha/The-House-MarketPlace.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
