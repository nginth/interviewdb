import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuestionsAll from "./QuestionsAll.js";
import Home from "./Home.js";

const styles = {
  container: {
    padding: "2em"
  }
};

class Body extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={QuestionsAll} />
      </div>
    );
  }
}

export default Body;
