import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  margin: 0 10px;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    text-decoration: none;
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  margin: 0 10px;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  /* Apply the same styles as the CSS classes */
  margin-left: 0.75em;
  margin-right: 0.75em;
  font-size: 1em;
  cursor: pointer;
  letter-spacing: .1em;
  text-indent: .3em;
  border-bottom: 3px solid transparent;
  
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    text-decoration: none;
  }
  
  &::after {
    transition: all ease-in-out .2s;
    background: ${(props) => props.theme.accentColor};
    content: "";
    display: block;
    margin-top: 2px;
    height: 3px;
    width: 0;
  }
  
  &:hover::after {
    visibility: visible;
    width: 40%;
  }
  
  &.active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
  
  &.active::after {
    transition: all ease-in-out .2s;
    width: 100%;
  }
  
  &.active:hover::after {
    width: 100%;
  }
`;

function NavBar() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {data?.logo && (
          <Navbar.Brand href="/">
            <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data?.logo?.height && data?.logo?.width
                  ? { height: data?.logo?.height, width: data?.logo?.width }
                  : styles.logoStyle
              }
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data
              && data.sections?.map((section) => (
                section?.type === 'link' ? (
                  <ExternalNavLink
                    key={section.title}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setExpanded(false)}
                    className="navbar__link"
                    theme={theme}
                  >
                    {section.title}
                  </ExternalNavLink>
                ) : (
                  <InternalNavLink
                    key={section.title}
                    onClick={() => setExpanded(false)}
                    to={section.href}
                    theme={theme}
                    className="navbar__link"
                  >
                    {section.title}
                  </InternalNavLink>
                )
              ))}
          </Nav>
          <ThemeToggler
            onClick={() => setExpanded(false)}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
