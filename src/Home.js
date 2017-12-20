import React, { Component } from "react";
import QuestionsAll from "./QuestionsAll";
import Grid from "material-ui/Grid";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid xs={12}>
            <h2>Hello, welcome to interviewDB!</h2>
          </Grid>
          <Grid xs={6}>
            <h3> Questions </h3>
            <QuestionsAll />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
