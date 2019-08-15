import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const navObj = {
  title: "FF",
  subtitle: "Music, Software, Geo.",
  logo: "../images/fff.jpg",
  navStyle: {
    fontSize: "1em",
    color: "white",
    float: "right"
  },
  navBarStyle: {
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  brandStyle: {
    color: "white",
    fontSize: "1.4em",
    marginTop: "0px"
  }
};

class Navigation extends Component {
  render() {
    return (
      <Navbar style={navObj.navBarStyle} fixed="top">
        <Container>
          <Navbar.Brand className="bungee">
            <Nav.Link id="top" href="#home" style={navObj.brandStyle}>
              {navObj.title}
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
        <Navbar.Collapse>
          <Nav style={navObj.navStyle}>
            <Nav.Link style={navObj.navStyle} href="#about">
              ABOUT
            </Nav.Link>
            <Nav.Link style={navObj.navStyle} href="#images">
              IMAGES
            </Nav.Link>
            <Nav.Link style={navObj.navStyle} href="#projects">
              EVENTS
            </Nav.Link>
            <Nav.Link style={navObj.navStyle} href="#music">
              MUSIC
            </Nav.Link>
            <Nav.Link style={navObj.navStyle} href="#video">
              VIDEO
            </Nav.Link>
            <Nav.Link style={navObj.navStyle} href="#contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
