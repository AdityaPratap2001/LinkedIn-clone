import React, { Component } from "react";

class InputBar extends Component {
  render() {
    return (
      <div className="input-bar">
        <form>
          <input type="text" placeholder="Send messages..." />
        </form>
        <div className="sendMessage">
          <i class="fas fa-paper-plane"></i>
          {/* <i class="fas fa-location-arrow"></i> */}
        </div>
      </div>
    );
  }
}

export default InputBar;
