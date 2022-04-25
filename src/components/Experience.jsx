/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
import React, { useContext } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import Fade from "react-reveal";
import Header from "./Header";
import "../css/experience.css";

const styles = {
  ulStyle: {
    listStylePosition: "outside",
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: "inline-block",
  },
  inlineChild: {
    display: "inline-block",
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Experience() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header title="Experience" />
      <div className="section-content-container">
        <Container>
          <Timeline lineColor={theme.timelineLineColor}>
            <Fade>
              <TimelineItem
                key={1}
                dateText="Feb 2020 – May 2022"
                dateInnerStyle={{ background: theme.accentColor }}
                style={styles.itemStyle}
                bodyContainerStyle={{ color: theme.color }}
              >
                <h2 className="item-title">
                  Software Development Engineer - 1
                </h2>
                <div style={styles.subtitleContainerStyle}>
                  <h4
                    style={{
                      ...styles.subtitleStyle,
                      color: theme.accentColor,
                    }}
                  >
                    <a
                      href="https://fibonalabs.com/"
                      style={{ cursor: "pointer" }}
                    >
                      Fibonalabs (Eynos Business Solutions Private Limited)
                    </a>
                  </h4>
                  <h5 style={styles.inlineChild}>&nbsp;· Full-time.</h5>
                </div>
                <ul style={styles.ulStyle}>
                  <div key={1}>
                    <li>
                      <span>
                        Developed an <strong>iOS App</strong> as the sole
                        developer, from project conception to development and
                        deployment in the AppStore and post-launch fixes.{" "}
                        <strong>Push Notification</strong>,{" "}
                        <strong>Attendance Module (Calender)</strong>,{" "}
                        <strong>Punch Module (Location)</strong>,{" "}
                        <strong>Offline Support (SQlite)</strong>, and many
                        other features are among the main features.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Developed cross-platform <strong>Chat App</strong> with
                        the help of <strong>Firebase</strong>, using{" "}
                        <strong>React-Native</strong>.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Led and worked as a <strong>front-end developer</strong>{" "}
                        and developed <strong>3+ Web apps</strong> using{" "}
                        <strong>React</strong>. One of the web apps I worked on
                        as the sole developer from conception to development and
                        deployment and post-launch fixes.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Led multiple projects from planning to delegating the
                        work, mentoring junior developers and guiding them on
                        best approaches, revewing their codes and provided
                        feedbacks.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Received great feedback from management as well as from
                        multiple clients and won awards such as{" "}
                        <strong>Employee of the Month for August 2020</strong>.
                      </span>
                    </li>
                  </div>
                </ul>
              </TimelineItem>
            </Fade>
            <Fade>
              <TimelineItem
                key={2}
                dateText="May 2018 – Sep 2019"
                dateInnerStyle={{ background: theme.accentColor }}
                style={styles.itemStyle}
                bodyContainerStyle={{ color: theme.color }}
              >
                <h2 className="item-title">iOS Developer</h2>
                <div style={styles.subtitleContainerStyle}>
                  <h4
                    style={{
                      ...styles.subtitleStyle,
                      color: theme.accentColor,
                    }}
                  >
                    <a
                      href="https://fibonalabs.com/"
                      style={{ cursor: "pointer" }}
                    >
                      Heptagon Technologies Private Limited
                    </a>
                  </h4>
                  <h5 style={styles.inlineChild}>&nbsp;· Full-time.</h5>
                </div>
                <ul style={styles.ulStyle}>
                  <div key={2}>
                    <li>
                      <span>
                        Worked as a <strong>iOS developer</strong> and
                        contributed to <strong>4+ iOS apps</strong>.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Push Notification</strong>,{" "}
                        <strong>Dynamic Form Creation</strong>,{" "}
                        <strong>Aadhaar Verification</strong>,{" "}
                        <strong>Location</strong>,{" "}
                        <strong>Document submissiom</strong>, and many other
                        features are among the features I have worked on.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Was also responsible for releasing the apps on the App
                        Store and post-launch fixes. I Learned and wrote{" "}
                        <strong>Unit and UI Testcases</strong>.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Learned <strong>SwiftUI</strong> and developed{" "}
                        <strong>
                          <a href="https://github.com/shankarmadeshvaran/SwiftUI_Tasks">
                            ToDo App
                          </a>
                        </strong>{" "}
                        and wrote multiple{" "}
                        <a href="https://shankarmadeshvaran.medium.com">
                          articles on SwiftUI, iOS concepts and cross-platform
                          development.
                        </a>
                      </span>
                    </li>
                    <br />
                  </div>
                </ul>
              </TimelineItem>
            </Fade>
          </Timeline>
        </Container>
      </div>
    </>
  );
}

export default Experience;
