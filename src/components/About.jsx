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
            <Row className="align-items-center">
              <Col md={8} sm={12} className="about-text-col">
                <div style={styles.introTextContainer} className="about-text">
                  <p>
                    Hello! I'm <strong>Shankar</strong>, a{" "}
                    <strong>Senior iOS & Mobile Engineer</strong> with{" "}
                    <strong>7+ years</strong> of experience building scalable mobile
                    applications from Tamil Nadu, India.
                  </p>
                  <p>
                    Currently a <strong>Software Development Engineer II</strong>{" "}
                    at <strong>Mygate</strong> — India's #1 Community Management{" "}
                    Platform serving <strong>4M+ households</strong> and{" "}
                    <strong>25K+ societies</strong> with a{" "}
                    <strong>4.7 App Store rating</strong>. I specialize in{" "}
                    <strong>iOS</strong> and <strong>Flutter mobile app development</strong>{" "}
                    with <strong>Flutter Add-to-App integration</strong>, performance
                    optimization, and enterprise-scale mobile architectures.
                  </p>
                  <p>
                    My key achievements include reducing{" "}
                    <strong>app size by 40%</strong> and{" "}
                    <strong>launch time by 50%</strong> while maintaining{" "}
                    <strong>99.9% crash-free users</strong>. I've architected{" "}
                    <strong>IoT integrations</strong>, built{" "}
                    <strong>real-time notification systems</strong> for 1.2M+ MAUs,
                    and automated <strong>CI/CD pipelines using Jenkins</strong>{" "}
                    for seamless deployments.
                  </p>
                  <p>
                    Expert in <strong>Swift</strong>, <strong>SwiftUI</strong>,{" "}
                    <strong>Flutter</strong>, and{" "}
                    <strong>cross-platform development</strong> with experience
                    publishing <strong>20+ mobile apps</strong> throughout my career.
                    I've scaled apps from 1M to 3.5M+ MAUs, mentored engineering
                    teams, and received the <strong>Cultural Champion Award (2024)</strong>{" "}
                    for technical leadership. Passionate about mobile innovation
                    and performance at scale.
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12} className="about-image-col">
                <div style={styles.introImageContainer} className="about-image">
                  <img src={profileImg} alt="profile" />
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
}

export default About;
