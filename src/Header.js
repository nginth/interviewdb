import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";

const link = {
  textDecoration: "none",
  color: "inherit"
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title={
            <Link to="/" style={link}>
              interviewDB
            </Link>
          }
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          onRequestChange={this.handleClose}
          docked={false}
        >
          <Link to="/">
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to="/questions">
            <MenuItem onClick={this.handleClose}>Questions</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default Header;
