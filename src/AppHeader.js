import React, { Component } from "react";

import classes from "./AppHeader.css";
import aclogo from "./aclogo.png";

class AppHeader extends Component {
  render() {
    return (
      <div className={classes.Appheader}>
        <br></br>
        <img
          id="aclogo"
          src={aclogo}
          className={classes.Applogo}
          alt="logo"
          // style={({ maxWidth: "150px" }, { maxHeight: "150px" })}
        />
        <br></br>
        <h2>React Hangman Game</h2>
      </div>
    );
  }
}

export default AppHeader;
