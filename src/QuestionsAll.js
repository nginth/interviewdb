import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

const styles = {
  card: {
    padding: "0.5em",
    margin: "1em"
  }
};

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
            <Card style={styles.card} key={question.id}>
              <CardHeader
                title={question.name}
                subtitle={question.categories.join(", ")}
              />
              <CardText> {question.content} </CardText>
            </Card>
          ))}
      </div>
    );
  }
}

export default QuestionsAll;
