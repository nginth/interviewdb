import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { deepPurple500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header.js";
import Body from "./Body.js";
import { BrowserRouter } from "react-router-dom";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header />
            <Body />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
