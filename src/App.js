import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { deepPurple500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header.js";
import Body from "./Body.js";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500
  }
});

const API_URL = "http://localhost:5000";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          <Body apiUrl={API_URL} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
