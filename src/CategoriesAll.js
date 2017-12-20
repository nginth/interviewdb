import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

const styles = {
  card: {
    padding: "0.5em",
    margin: "1em"
  }
};

const API_URL = "http://localhost:5000";

class CategoriesAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }
  componentDidMount() {
    fetch(API_URL + "/category")
      .then(response => response.json())
      .then(json => this.setState({ categories: json.categories }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.categories &&
          this.state.categories.map(category => (
            <Card style={styles.card} key={category.name}>
              <CardHeader title={category.name} />
              <CardText> {category.name} </CardText>
            </Card>
          ))}
      </div>
    );
  }
}

export default CategoriesAll;
