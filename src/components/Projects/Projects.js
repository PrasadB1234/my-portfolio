import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crystalImg from "../../Assets/Projects/crystal-img.png";
import docsinkImg from "../../Assets/Projects/docsink.png";
import fitAngle from "../../Assets/Projects/fit_angle.png";
import ortholiveImg from "../../Assets/Projects/ortholiveImg.png";

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
              imgPath={fitAngle}
              isBlog={false}
              title="Fit Angle"
              description="Fit Angle is a modern, user-friendly gym website designed to provide a seamless experience for fitness enthusiasts looking to achieve their health and wellness goals. Built using ReactJS, TypeScript, Redux, and Material-UI, the platform focuses on user engagement, convenience, and efficient fitness management."
              ghLink="https://github.com/PrasadB1234/fit-angle/tree/main"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ortholiveImg}
              isBlog={true}
              title="Bits-0f-C0de"
              description="OrthoLive is a comprehensive musculoskeletal care platform that offers both virtual and in-person treatments, providing 24/7 access to orthopedic specialists. Designed to enhance patient care and streamline healthcare delivery, OrthoLive delivers personalized, scalable solutions for musculoskeletal injury management."
              ghLink="https://www.ortholive.com/remote-injury-care/"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docsinkImg}
              isBlog={true}
              title="Docsink Athena Health"
              description="DocsInk integrates with Athena Health to enhance patient care through Remote Patient Monitoring (RPM) and Chronic Care Management (CCM).RPM enables healthcare providers to monitor patients remotely, improving care efficiency and reducing hospital readmissions."
              ghLink="https://docsink.com/athenahealth-docsink-embedded-app/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crystalImg}
              isBlog={true}
              title="Crystal Psyquiatric EHR"
              description="Crystal Psychiatric EHR is an advanced Electronic Health Record (EHR) system designed specifically for mental health practitioners, including psychiatrists, therapists, and behavioral health specialists. The system streamlines patient management, improves clinical workflows, and ensures compliance with healthcare regulations."
              ghLink="https://qa.mathevii.com/auth/login"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/tejass21/Ai_for_social_good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/tejass21/Face_And_Emotion_Detaction"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
