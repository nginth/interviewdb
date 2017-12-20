import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuestionsAll from "./QuestionsAll.js";
import Home from "./Home.js";
import Grid from "material-ui/Grid";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 30,
    padding: "2em"
  }
};

class Body extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={QuestionsAll} />
      </div>
    );
  }
}

export default Body;
