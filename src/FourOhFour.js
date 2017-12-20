import React, { Component } from "react";

class FourOhFour extends Component {
  render() {
    return <div> {this.props.message || "Not found."} </div>;
  }
}

export default FourOhFour;
