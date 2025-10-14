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
                dateText="May 2022 – Present"
                dateInnerStyle={{ background: theme.accentColor }}
                style={styles.itemStyle}
                bodyContainerStyle={{ color: theme.color }}
              >
                <h2 className="item-title">
                  Software Development Engineer II
                </h2>
                <div style={styles.subtitleContainerStyle}>
                  <h4
                    style={{
                      ...styles.subtitleStyle,
                      color: theme.accentColor,
                    }}
                  >
                    <a
                      href="https://mygate.com/"
                      style={{ cursor: "pointer" }}
                    >
                      Mygate (Vivish Technologies)
                    </a>
                  </h4>
                  <h5 style={styles.inlineChild}>&nbsp;· Bengaluru, India</h5>
                </div>
                <ul style={styles.ulStyle}>
                  <div key={1}>
                    <li>
                      <span>
                        Key contributor at <strong>Mygate</strong> — India&apos;s #1 Community Management Platform serving <strong>4M+ households</strong> and <strong>25K+ societies</strong> with a <strong>4.7 App Store rating</strong>.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Architected and optimized iOS app, reducing <strong>app size by 40%</strong> and cutting <strong>app launch time by 50%</strong>, while maintaining <strong>99.9% crash-free users</strong>.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Implemented <strong>iOS–Flutter Add-to-App integration</strong>, eliminating duplication across multiple business verticals and enabling seamless cross-platform development.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Developed <strong>IoT integrations (BLE, WiFi-enabled Smart Devices)</strong> for home security and community automation, enhancing user experience with smart home features.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Built <strong>real-time notification system</strong> supporting <strong>1.2M+ MAUs</strong> with rich push extensions and contributed to <strong>ad-tech SDK</strong> for iOS, unlocking new monetization channels and revenue growth.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Automated <strong>iOS build pipeline using Jenkins</strong> on dedicated Mac Mini (static IP), enabling <strong>continuous build generation and deployment</strong> with streamlined CI/CD processes.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Coordinated <strong>iOS app releases</strong>: App Store uploads, <strong>code signing & certificate management</strong>, phased rollouts, monitoring, and hotfix deployments.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Mentored junior engineers</strong>, providing guidance on code reviews, architecture, and best practices, fostering team growth and knowledge sharing.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Recognition:</strong> Cultural Champion Award (2024) for technical leadership and cross-functional collaboration.
                      </span>
                    </li>
                  </div>
                </ul>
              </TimelineItem>
            </Fade>
            <Fade>
              <TimelineItem
                key={2}
                dateText="June 2021 – May 2022"
                dateInnerStyle={{ background: theme.accentColor }}
                style={styles.itemStyle}
                bodyContainerStyle={{ color: theme.color }}
              >
                <h2 className="item-title">
                  Software Development Engineer I
                </h2>
                <div style={styles.subtitleContainerStyle}>
                  <h4
                    style={{
                      ...styles.subtitleStyle,
                      color: theme.accentColor,
                    }}
                  >
                    <a
                      href="https://mygate.com/"
                      style={{ cursor: "pointer" }}
                    >
                      Mygate (Vivish Technologies)
                    </a>
                  </h4>
                  <h5 style={styles.inlineChild}>&nbsp;· Bengaluru, India</h5>
                </div>
                <ul style={styles.ulStyle}>
                  <div key={2}>
                    <li>
                      <span>
                        Scaled Mygate iOS apps on India&apos;s #1 Community Management Platform from <strong>1M → 3.5M+ MAUs</strong>, demonstrating exceptional growth and user adoption.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Built <strong>white-label international apps</strong> with modular theming framework for deployment in <strong>3+ global markets</strong>, enabling rapid market expansion.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Implemented <strong>CLEAN-Swift modular architecture</strong>, improving maintainability and release velocity for faster feature development.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Reduced <strong>app startup latency</strong> via caching and lazy loading, achieving measurable performance gains and enhanced user experience.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Enhanced <strong>cross-platform parity</strong> by contributing to Flutter alongside iOS development, ensuring consistent user experience across platforms.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Supported iOS release processes including builds, App Store uploads, and monitoring, contributing to <strong>smooth delivery cycles</strong>.
                      </span>
                    </li>
                  </div>
                </ul>
              </TimelineItem>
            </Fade>
            <Fade>
              <TimelineItem
                key={3}
                dateText="January 2020 – June 2021"
                dateInnerStyle={{ background: theme.accentColor }}
                style={styles.itemStyle}
                bodyContainerStyle={{ color: theme.color }}
              >
                <h2 className="item-title">
                  Software Development Engineer I
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
                      Fibonalabs
                    </a>
                  </h4>
                  <h5 style={styles.inlineChild}>&nbsp;· Bengaluru, India</h5>
                </div>
                <ul style={styles.ulStyle}>
                  <div key={3}>
                    <li>
                      <span>
                        <strong>Sole developer</strong> of WalletHR iOS app — built from scratch and launched on App Store, enabling complete <strong>HR lifecycle management</strong> for enterprises.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Designed and integrated <strong>real-time location tracking</strong> for attendance, ensuring accuracy for enterprises and optimized app for scalability supporting <strong>thousands of enterprise employees</strong>.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Led a <strong>4-member React team</strong> on Azentio MFundPlus, reducing <strong>manual fund workflows by 40%</strong> and delivered multiple client projects.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Sole developer of <strong>Indxx CAMT app</strong>, reconciling corporate action data and reducing mismatches, improving data accuracy for financial operations.
                      </span>
                    </li>
                  </div>
                </ul>
              </TimelineItem>
            </Fade>
            <Fade>
              <TimelineItem
                key={4}
                dateText="April 2018 – September 2019"
                dateInnerStyle={{ background: theme.accentColor }}
                style={styles.itemStyle}
                bodyContainerStyle={{ color: theme.color }}
              >
                <h2 className="item-title">Software Developer</h2>
                <div style={styles.subtitleContainerStyle}>
                  <h4
                    style={{
                      ...styles.subtitleStyle,
                      color: theme.accentColor,
                    }}
                  >
                    Heptagon Technologies
                  </h4>
                  <h5 style={styles.inlineChild}>&nbsp;· Coimbatore, India</h5>
                </div>
                <ul style={styles.ulStyle}>
                  <div key={4}>
                    <li>
                      <span>
                        Developed <strong>Paperless Onboarding Platform (POP)</strong> for Quess Corp, digitizing onboarding for <strong>10K+ hires</strong> and streamlining HR processes.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Built <strong>ReferJunction app</strong> with push notifications and location services, boosting <strong>referral engagement by 20%</strong> and improving user acquisition.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Designed and implemented <strong>JobPorts app end-to-end</strong> for recruiters and vendors, facilitating job matching and recruitment processes.
                      </span>
                    </li>
                    <br />
                    <li>
                      <span>
                        Delivered and maintained <strong>multiple enterprise iOS apps</strong>, ensuring stability, smooth rollouts, and post-launch support for various clients.
                      </span>
                    </li>
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
