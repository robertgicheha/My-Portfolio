import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Robert Gicheha </span>
            from <span className="purple"> Nyeri, Kenya</span>
            <br />
            I am currently employed as a software developer at Tech For Development.
            <br />
            I have completed my bachelor's degree where I pursued a degree in Software Engineering at KCA University. I socred a GPA of 3.10 and was awared a second-class upper division honors.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching and Playing Football.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies and Listening to music.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and watching documentaries.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Know your value and someone will notice you and pay for it!"{" "}
          </p>
          <footer className="blockquote-footer">Robert Gicheha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
