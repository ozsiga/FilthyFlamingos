import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
