import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultUserPic from "../../../../assets/defaultProfilePic.png";
import { connect } from "react-redux";
import * as actionTypes from "../../../../store/actions/actionTypes";

class Invitation extends Component {
  state = {
    data: this.props.invitation,
    accepted: null,
    rejected: null,
  };

  acceptInvitation = (index, connection_id) => {
    setTimeout(()=>{
      this.setState({ accepted: true });
    },1000)
    this.props.accept(index, connection_id);
    this.props.addedConnection();
  };
  removeInvitation = (index, connection_id) => {
    setTimeout(()=>{  
      this.setState({ rejected: true });
    },1000)
    this.props.reject(index, connection_id);
  };

  render() {
    let imgSrc = this.state.data.connection_avatar;
    if (imgSrc === null) {
      imgSrc = defaultUserPic;
    }

    if (this.state.accepted) {
      return (
        <>
          <NavLink to={`/user/${this.state.data.profile_id}`}>
            <div className="connectionFirst">
              <img src={imgSrc} />
            </div>
            <div className="connectionSecond">
              <h6 className="connectionName">
                {this.state.data.connection_name}{" "}
                <span style={{ fontWeight: "350" }}>is now a connection.</span>
              </h6>
            </div>
          </NavLink>
        </>
      );
    }
    if (this.state.rejected) {
      return (
        <>
          <NavLink to={`/user/${this.state.data.profile_id}`}>
            <div className="connectionFirst">
              <img src={imgSrc} />
            </div>
            <div className="connectionSecond">
              <h6 className="connectionName">
                {this.state.data.connection_name}{" "}
                <span style={{ fontWeight: "350" }}>will be removed.</span>
              </h6>
            </div>
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to={`/user/${this.state.data.profile_id}`}>
          <div className="connectionFirst">
            <img src={imgSrc} />
          </div>
          <div className="connectionSecond">
            <h6 className="connectionName">
              {this.state.data.connection_name}
            </h6>
            <h6 className="connectionDomain">
              {this.state.data.connection_tagline}
            </h6>
          </div>
        </NavLink>
        <div className="connectionThird">
          <h6
            onClick={() =>
              this.removeInvitation(
                this.props.index,
                this.state.data.connection_id
              )
            }
          >
            Delete
          </h6>
          <button
            onClick={() =>
              this.acceptInvitation(
                this.props.index,
                this.state.data.connection_id
              )
            }
          >
            Accept
          </button>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addedConnection : () => dispatch({type : actionTypes.ADDED_CONNECTION}),
  };
};

export default connect(null, mapDispatchToProps)(Invitation);
