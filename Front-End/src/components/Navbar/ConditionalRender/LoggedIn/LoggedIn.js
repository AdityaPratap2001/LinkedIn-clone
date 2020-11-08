import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import profSample from "../../../../assets/profileSample.jpg";

class LoggedIn extends Component {
  render() {
    return (
      <ul className="conditional_render NavLink navbar-nav mr-auto">
        <NavLink
          className='NavLinkk'
          to="/"
          activeStyle={{
            // borderBottom: "black 3px solid",
            color: "black",
          }}
        >
          <li className="nav-item">
            {/* <h6>MEN</h6> */}
            <i class="fas fa-2x fa-home"></i>
            <br></br>
            <h6>Home</h6>
          </li>
        </NavLink>

        <NavLink
          className='NavLinkk'
          to="/network"
          activeStyle={{ borderBottom: "black 3px solid", color: "black" }}
        >
          <li className="nav-item">
            {/* <h6>MEN</h6> */}
            <i class="fas fa-user-friends"></i>
            <br></br>
            <h6>Network</h6>
          </li>
        </NavLink>

        <NavLink
          className='NavLinkk'
          to="/jobs"
          activeStyle={{ borderBottom: "black 3px solid", color: "black" }}
        >
          <li className="nav-item">
            {/* <h6>MEN</h6> */}
            <i class="fas fa-briefcase"></i>
            <br></br>
            <h6>Jobs</h6>
          </li>
        </NavLink>

        <NavLink
          className='NavLinkk'
          to="/message"
          activeStyle={{ borderBottom: "black 3px solid", color: "black" }}
        >
          <li className="nav-item">
            {/* <h6>WOMEN</h6> */}
            <i class="fas fa-comment-alt"></i>
            <h6>Messaging</h6>
          </li>
        </NavLink>

        <NavLink
          className='NavLinkk'
          to="/notifications"
          activeStyle={{ borderBottom: "black 3px solid", color: "black" }}
        >
          <li className="nav-item">
            <i class="fas fa-bell"></i>
            <h6>Notifications</h6>
          </li>
        </NavLink>

        {/* User dropdown */}
        <li class="user nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user-circle"></i>
            <br></br>
            <h6>Aditya</h6>
          </a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/profile">
              <div className="navUserProfHead">
                <div className="navUserProfile">
                  {/* <i class="fas fa-2x fa-user-circle"></i> */}
                  <img className="navDropdownProfImg" src={profSample} />
                </div>
                <div style={{ display: "inline-block" }}>
                  <h6 className="name">Aditya Pratap Singh</h6>
                  <h6 className="status">
                    Web Developer at Software Incubator (SDC-SI)
                  </h6>
                </div>
              </div>
              <button className="viewProfile">View Profile</button>
            </NavLink>
            <div className="dropAccount">
              <h6>ACCOUNT</h6>
            </div>
            <NavLink to="/user">
              <h6 className="dropAccountOptions">Settings & Privacy</h6>
            </NavLink>
            <NavLink to="/postedJobs">
              <h6 className="dropAccountOptions">My Posted Jobs</h6>
            </NavLink>
            <div className="dropAccount">
              <h6>MANAGE</h6>
            </div>
            <h6 className="dropAccountOptions">SIGN OUT</h6>
          </div>
        </li>

        <li class="user nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-th"></i>
            <br></br>
            <h6>Work</h6>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="dropAccount">
              <h6>CREATE</h6>
            </div>
            <NavLink to="/postJob">
              <h6 className="dropAccountOptions">Post a job</h6>
            </NavLink>
            <NavLink to="/createPage">
              <h6 className="dropAccountOptions">Create Company page +</h6>
            </NavLink>
          </div>
        </li>
      </ul>
    );
  }
}

export default LoggedIn;
