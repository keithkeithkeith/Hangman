import React, { Component } from "react";

import classes from "./AppFooter.css";
import aclogo from "./aclogo.png";

class AppFooter extends Component {
  render() {
    return (
      <div className={classes.AppFooter}>
        <a target="_blank">
          <img src={aclogo} width="30" height="30" alt="Asian College" />
        </a>
        <h5>
          Made with <span style={{ color: "red" }}>&#9829;</span> by Group C as
          a Finals Project for the Subject "Application Development"
        </h5>
      </div>
    );
  }
}

export default AppFooter;
