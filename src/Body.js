import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuestionsAll from "./QuestionsAll.js";
import Question from "./Question.js";
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
        <Route exact path="/questions/:questionId" component={Question} />
      </div>
    );
  }
}

export default Body;
