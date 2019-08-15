import React, { Component } from "react";
import Hero from "./Hero.js";
import ImageGrid from "./ImageGrid.js";
import MusicPlayer from "./MusicPlayer.js";
import VideoPlayer from "./VideoPlayer.js";
import Projects from "./Projects.js";
import About from "./About.js";
import Contact from "./Contact.js";

const internals = {};

internals.style = {
  height: "auto",
  position: "relative"
};

class Container extends Component {
  render() {
    return (
      <div className="container-fluid main" style={internals.style}>
        <Hero />
        <About />
        <ImageGrid />
        <Projects />
        <MusicPlayer />
        <VideoPlayer />
        <Contact />
      </div>
    );
  }
}

export default Container;
