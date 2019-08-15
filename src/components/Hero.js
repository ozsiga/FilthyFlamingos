"use-strict";

import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FaChevronCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
const heroObj = {
  title: "Filthy Flamingos"
};

const internals = {};

internals.styles = {
  hero: {
    color: "white",
    borderRadius: "0",
    textAlign: "center",
    background: "transparent",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    maxWidth: "50vw"
  }
};

class Hero extends Component {
  render() {
    return (
      <Jumbotron style={internals.styles.hero} id="home">
        <div>
          <h1
            style={{
              position: "relative",
              top: "-41vh"
            }}
          >
            {heroObj.title}
          </h1>
          <Nav.Link style={{ color: "white" }} href="#about">
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name"
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: "17vh"
                }}
              >
                <FaChevronCircleDown />
              </div>
            </IconContext.Provider>
          </Nav.Link>
        </div>
      </Jumbotron>
    );
  }
}

export default Hero;
