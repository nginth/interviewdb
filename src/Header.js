import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";

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
        <AppBar title="interviewDB" onClick={this.handleToggle} />
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
