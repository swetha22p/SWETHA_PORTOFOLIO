import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cb from "../../Assets/Projects/cb.png";
import gcc from "../../Assets/Projects/gcc.png";
import hack from "../../Assets/Projects/hackathon.png";
import resume from "../../Assets/Projects/resume.png";
import phcp from "../../Assets/Projects/phcp.png";
import life from "../../Assets/Projects/li.png"
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
              imgPath={phcp}
              isBlog={false}
              title="Primary Health Care Platform"
              description="A platform for primary health care services which works in data collection in both offile and online"
              ghLink=""
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={hack}
              isBlog={false}
              title="Hackathon Website"
              description="website built for hackathon events built for student resgistration and faculty for payments."
              ghLink="https://github.com/swetha22p/Hackathon"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder"
              description="A web application to build resumes easily."
              ghLink="https://github.com/swetha22p/RESUMEBUILDER"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cb}
              isBlog={false}
              title="Spam mail detection"
              description="A spam mail detector using Machine Learning and Flask"
              ghLink="https://github.com/swetha22p/spam-email--detection."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcc}
              isBlog={false}
              title="Student Club Dashboard"
              description="A Full stack student management system facilitating project exploration, discussions, profile management, and community collaboration."
              ghLink="https://github.com/swetha22p/GCC_DASHBOARD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={life}
              isBlog={false}
              title="Life Insurance Prediction"
              description="A Full stack ML project for predicting a person is eligible for life insurance or not"
              ghLink="https://github.com/swetha22p/LIFE_insurance"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
