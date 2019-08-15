"use-strict";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

class ImageGrid extends Component {
  render() {
    const images = [
      {
        original: require("../images/Filthy.jpg"),
        thumbnail: require("../images/Filthy.jpg")
      },
      {
        original: require("../images/Filthy1.jpg"),
        thumbnail: require("../images/Filthy1.jpg")
      },
      {
        original: require("../images/Filthy2.jpg"),
        thumbnail: require("../images/Filthy2.jpg")
      },
      {
        original: require("../images/ffffff.jpg"),
        thumbnail: require("../images/ffffff.jpg")
      },
      {
        original: require("../images/Filthy4.jpg"),
        thumbnail: require("../images/Filthy4.jpg")
      },
      {
        original: require("../images/Filthy5.jpg"),
        thumbnail: require("../images/Filthy5.jpg")
      },
      {
        original: require("../images/Filthy6.jpg"),
        thumbnail: require("../images/Filthy6.jpg")
      }
    ];

    return (
      <Container id="images">
        <h1>Images / Photos </h1>
        <ImageGallery items={images} />
        <h5>Filthy Flamingos (Klinika)</h5>
      </Container>
    );
  }
}

export default ImageGrid;
