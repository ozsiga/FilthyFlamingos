"use-strict";

import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

const BandCamp = {
  runaway: "http://swartmusic.bandcamp.com/track/back-at-the-warehouse",
  storm: "http://vaguetechno.bandcamp.com/album/proph-n-more-shems-district-ep"
};

const StyleSheet = {
  border: "0",
  width: "100%",
  height: "200px"
};

class MusicPlayer extends Component {
  render() {
    return (
      <Container id="music">
        <Row>
          <Col xs={12} sm={12}>
            <h1>Recordings</h1>
          </Col>
          <Col xs={12} sm={6}>
            <h3>
              Filthy Flamingos <i>- October 21, 2020</i>
            </h3>
            <iframe
              style={StyleSheet}
              src={BandCamp.runaway}
              seamless
              title="valami"
            >
              <a href="http://swartmusic.bandcamp.com/track/back-at-the-warehouse">
                Valami techno
              </a>
            </iframe>
          </Col>
          <Col xs={12} sm={6}>
            <h3>
              Toro Lomo <i>- August 2, 2020</i>
            </h3>
            <iframe
              style={StyleSheet}
              src={BandCamp.storm}
              seamless
              title="valami1"
            >
              <a href="http://vaguetechno.bandcamp.com/album/proph-n-more-shems-district-ep">
                Még egy kis techno
              </a>
            </iframe>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicPlayer;
