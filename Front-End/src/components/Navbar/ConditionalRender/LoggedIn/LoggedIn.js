import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import profSample from '../../../../assets/profileSample.jpg';

class LoggedIn extends Component {
  render() {
    return (
      <ul className="conditional_render NavLink navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            activeStyle={{ textDecoration: "underline", color: "black" }}
          >
            {/* <h6>MEN</h6> */}
            <i class="fas fa-2x fa-home"></i>
            <br></br>
            <h6>Home</h6>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/network"
            activeStyle={{ textDecoration: "underline", color: "black" }}
          >
            {/* <h6>MEN</h6> */}
            <i class="fas fa-user-friends"></i>
            <br></br>
            <h6>Network</h6>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/jobs"
            activeStyle={{ textDecoration: "underline", color: "black" }}
          >
            {/* <h6>MEN</h6> */}
            <i class="fas fa-briefcase"></i>
            <br></br>
            <h6>Jobs</h6>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/message"
            activeStyle={{ textDecoration: "underline", color: "black" }}
          >
            {/* <h6>WOMEN</h6> */}
            <i class="fas fa-comment-alt"></i>
            <h6>Messaging</h6>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/notifications"
            activeStyle={{ textDecoration: "underline", color: "black" }}
          >
            <i class="fas fa-bell"></i>
            <h6>Notifications</h6>
          </NavLink>
        </li>

        
      </ul>
    );
  }
}

export default LoggedIn;
