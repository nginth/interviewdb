import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

const styles = {
  card: {
    padding: "0.5em",
    margin: "1em"
  },
  container: {
    padding: "2em"
  }
};

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }
  componentDidMount() {
    fetch(this.props.apiUrl + "/question")
      .then(response => response.json())
      .then(json => this.setState({ questions: json.questions }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div style={styles.container}>
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

export default Body;
