import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

const styles = {
  card: {
    padding: "0.5em",
    margin: "1em"
  }
};

class QuestionCard extends Component {
  render() {
    const question = this.props.question;
    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            title={question.name}
            subtitle={question.categories && question.categories.join(", ")}
          />
          <CardText> {question.content} </CardText>
        </Card>
      </div>
    );
  }
}

export default QuestionCard;
