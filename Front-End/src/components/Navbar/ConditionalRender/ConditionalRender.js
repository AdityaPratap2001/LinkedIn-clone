import React, { Component } from "react";
import LoggedIn from "./LoggedIn/LoggedIn";
import LoggedOut from "./LoggedOut/LoggedOut";

class ConditionalRender extends Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    let logStatus = localStorage.getItem("logStatus");
    if (logStatus) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    let navData = <LoggedOut />;
    if (this.state.isLoggedIn) {
      navData = <LoggedIn />;
    }

    return <>{navData}</>;
  }
}

export default ConditionalRender;
