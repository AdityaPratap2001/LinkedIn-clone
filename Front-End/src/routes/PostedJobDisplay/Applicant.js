import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultUserImg from "../../assets/defaultProfilePic.png";

class Applicants extends Component {
  state = {
    data: this.props.data,
    status: this.props.data.has_been_accepted,
  };

  acceptApplicant = () => {
    this.props.accept(this.props.data.applicant_id);
    // setTimeout(()=>{
      this.setState({status : true});
    // },1000)
  };
  rejectApplicant = () => {
    this.props.reject(this.props.data.applicant_id);
    // setTimeout(()=>{
      this.setState({status : false});
    // },1000)
  };

  render() {
    let imgSrc = this.props.data.applicant_avatar;
    if (imgSrc === null) {
      imgSrc = defaultUserImg;
    }

    if (this.state.status === true) {
      return (
        <div className="user">
          <NavLink to={`/user/${this.props.data.applicant_id}`}>
            <img src={imgSrc} />
          </NavLink>

          <div className="userDesc">
            <NavLink to={`/user/${this.props.data.applicant_id}`}>
              <h6 className="userName">
                {this.props.data.applicant_name} has been accepted
              </h6>
            </NavLink>
          </div>
        </div>
      );
    }
    if (this.state.status === false) {
      return (
        <div className="user">
          <NavLink to={`/user/${this.props.data.applicant_id}`}>
            <img src={imgSrc} />
          </NavLink>

          <div className="userDesc">
            <NavLink to={`/user/${this.props.data.applicant_id}`}>
              <h6 className="userName">
                {this.props.data.applicant_name} has been rejected
              </h6>
            </NavLink>
          </div>
        </div>
      );
    }

    return (
      <div className="user">
        <NavLink to={`/user/${this.props.data.applicant_id}`}>
          <img src={imgSrc} />
        </NavLink>

        <div className="userDesc">
          <NavLink to={`/user/${this.props.data.applicant_id}`}>
            <h6 className="userName">{this.props.data.applicant_name}</h6>
            <h6 className="userTagline">{this.props.data.applicant_tagline}</h6>
          </NavLink>
          <div className="buttons">
            <h6 onClick={this.acceptApplicant} className="acceptButton">
              Accept
            </h6>
            <h6 onClick={this.rejectApplicant} className="rejectButton">
              Reject
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Applicants;
