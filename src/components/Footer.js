"use-strict";

import React, { Component } from "react";

const date = new Date();

const footerObj = {
  name: "Oberth Zsigmond",
  date: date.getFullYear()
};

const styleSheet = {
  container: {
    background: "",
    left: "0px",
    right: "0px",
    width: "100vw",
    padding: "2em",
    color: "#9d9d9d",
    marginTop: "5em"
  },
  footer: {
    textAlign: "center"
  }
};

class Footer extends Component {
  render() {
    return (
      <div style={styleSheet.container}>
        <footer style={styleSheet.footer}>
          <p>
            &copy; {footerObj.date} - {footerObj.name}
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
