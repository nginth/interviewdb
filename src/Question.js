import React, { Component } from "react";
import QuestionCard from "./QuestionCard.js";

const API_URL = "http://localhost:5000";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      not_found: true
    };
  }
  componentDidMount() {
    fetch(API_URL + "/question/" + this.props.match.params.questionId)
      .then(response => response.json())
      .then(question => this.setState({ question: question, not_found: false }))
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.not_found) {
      return <div> Question not found. </div>;
    } else {
      return (
        <div>
          <QuestionCard question={this.state.question} />
        </div>
      );
    }
  }
}

export default Question;
