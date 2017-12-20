import React, { Component } from "react";
import QuestionsAll from "./QuestionsAll";
import Grid from "material-ui/Grid";
import CategoriesAll from "./CategoriesAll";

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
          <Grid xs={6}>
            <h3> Categories </h3>
            <CategoriesAll />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
