import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

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
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
