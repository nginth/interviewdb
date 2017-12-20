import React, { Component } from "react";
import QuestionCard from "./QuestionCard.js";

const API_URL = "http://localhost:5000";

class QuestionsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }
  componentDidMount() {
    fetch(API_URL + "/question")
      .then(response => response.json())
      .then(json => this.setState({ questions: json.questions }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.questions &&
          this.state.questions.map(question => (
            <QuestionCard question={question} key={question.id} />
          ))}
      </div>
    );
  }
}

export default QuestionsAll;
