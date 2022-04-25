/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal";
import Header from "./Header";
import profileImg from "./about/profile.jpg";

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

function About() {
  return (
    <>
      <Header title="About" />
      <div className="section-content-container">
        <Container>
          <Fade>
            <Row>
              <Col style={styles.introTextContainer}>
                <p>
                  Hello! I'm <strong>Shankar</strong>, a{" "}
                  <strong>Software Development Engineer</strong> from Tamilnadu,
                  India.
                </p>
                <p>
                  An experienced mobile application developer who has a track
                  record of successfully developing iOS apps that are both
                  well-received and commercially viable. Have published{" "}
                  <strong>5+</strong> apps on Play Store with over{" "}
                  <strong>2 million</strong> combined downloads.
                </p>
                <p>
                  I have experience in working with{" "}
                  <strong>Front-End Development (React)</strong> who has
                  successfully developed <strong>3+</strong> apps for multiple
                  organization/clients.
                </p>
                <p>
                  I enjoy working on side projects to upskill myself and learn
                  new stuff. Not only skilled in{" "}
                  <strong>iOS App Development</strong>, but also proficient in{" "}
                  <strong>SwiftUI</strong>,{" "}
                  <strong>Cross Platform App Development</strong> and{" "}
                  <strong>Front-end development</strong>.
                </p>
              </Col>
              <Col style={styles.introImageContainer}>
                <img src={profileImg} alt="profile" />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
}

export default About;
