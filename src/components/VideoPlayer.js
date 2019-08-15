"use-strict";

import React from "react";
import { Row, Col, ResponsiveEmbed, Container } from "react-bootstrap";

class VideoPlayer extends React.Component {
  render() {
    return (
      <Container id="video">
        <Row>
          <Col xs={12}>
            <h1>Video</h1>
            <h3>Opportunity #6</h3>
            <ResponsiveEmbed style={{ height: "400px" }}>
              <embed
                type="video/mp4"
                src="https://www.youtube.com/embed/UgjNmqOHk5I"
              />
            </ResponsiveEmbed>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default VideoPlayer;
