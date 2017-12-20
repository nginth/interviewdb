import React, { Component } from "react";
import QuestionCard from "./QuestionCard.js";
import FourOhFour from "./FourOhFour";

const API_URL = "http://localhost:5000";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      notFound: true
    };
  }

  componentDidMount() {
    fetch(API_URL + "/question/" + this.props.match.params.questionId)
      .then(response => response.json())
      .then(question => this.setState({ question: question, notFound: false }))
      .catch(err => {
        console.log(err);
        this.setState({ question: null });
      });
  }

  render() {
    const question = this.state.question;
    if (!question || question.message) {
      return <FourOhFour message="Question not found." />;
    }
    return (
      <div>
        <QuestionCard question={this.state.question} />
      </div>
    );
  }
}

export default Question;
