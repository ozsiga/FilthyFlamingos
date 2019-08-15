"use-strict";

import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <Container id="projects">
        <h1> Upcoming Events </h1>
        <Row className="show-grid">
          <Col xs={12}>
            <h2>Klinika</h2>
            <p>2020 sept. 20. </p>
            <p>
              <a href="https://www.youtube.com/watch?v=UgjNmqOHk5I&t=185s">
                Check out on YouTube
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
