import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./AttemptsLeft.css";

class AttemptsLeft extends Component {
  render() {
    return (
      <div className={classes.AttemptsLeft}>
        <span>
          Retries left:{" "}
          <span className={classes.Number}>{this.props.attempts}</span>
        </span>
      </div>
    );
  }
}

AttemptsLeft.propTypes = {
  attempts: PropTypes.number.isRequired,
};

export default AttemptsLeft;
