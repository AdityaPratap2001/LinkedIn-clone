import React, { Component } from "react";
import userImgSrc from "../../../../assets/profileSample.jpg";
import emptySrc from "../../../../assets/empty.png";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "../../../../API/baseURL/baseURL";
import defaultUserPic from "../../../../assets/defaultProfilePic.png";
import Invitation from "./Invitation";

// const data = [
//   {
//     imgSrc: userImgSrc,
//     name: "Monica Geller",
//     domain: "Chef",
//     industry: "Allasandro's",
//   },
//   {
//     imgSrc: userImgSrc,
//     name: "Chandler Bing",
//     domain: "Sarcastic",
//     industry: "Everything",
//   },
//   {
//     imgSrc: userImgSrc,
//     name: "Gunther Green",
//     domain: "Waiter",
//     industry: "Central Perk",
//   },
//   {
//     imgSrc: userImgSrc,
//     name: "Phoebe Buffay",
//     domain: "Masseuse",
//     industry: "Ross' place",
//   },
// ];

class Invitations extends Component {
  state = {
    loading: true,
    invitations: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`/user/network/view/pending_connection/?filter=received`, config)
      .then((res) => {
        console.log(res);
        this.setState({ invitations: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        if(err.response.status === 404){
          this.setState({invitations : [], loading: false})
        }
      });
  }

  removeInvitation = (id, connectionId) => {
    // let newInvitationsArray = this.state.invitations;
    // console.log(newInvitationsArray);
    // newInvitationsArray.splice(id, 1);
    // this.setState({ invitations: newInvitationsArray });
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`/user/network/delete/connection/${connectionId}/`, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.invitations);
  };

  acceptInvitation = (id, connectionId) => {
    let data = {
      connection_id: connectionId,
    };
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .patch(`/user/network/view/pending_connection/`, data, config)
      .then((res) => {
        console.log(res);
        // let newInvitationsArray = this.state.invitations;
        // console.log(newInvitationsArray);
        // newInvitationsArray.splice(id, 1);
        // this.setState({ invitations: newInvitationsArray });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let invitationsData = null;

    if (!this.state.loading && this.state.invitations) {
      invitationsData = this.state.invitations.map((item, index) => {
        let imgSrc = item.connection_avatar;
        if (imgSrc === null) {
          imgSrc = defaultUserPic;
        }
        return (
          <div className="connection savedJob">
            <Invitation
              accept={this.acceptInvitation}
              reject={this.removeInvitation}
              index={index}
              invitation={item}
            />
          </div>
        );
      });
    }

    if (
      this.state.invitations === null ||
      this.state.invitations === "" ||
      this.state.invitations.length === 0
    ) {
      invitationsData = (
        <div className="emptyImgDiv">
          <img src={emptySrc} className="emptyImg" />
        </div>
      );
    }

    if (this.state.loading) {
      invitationsData = (
        <>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Invitations</h6>
        <div className="savedJobsDisplay">{invitationsData}</div>
      </div>
    );
  }
}

export default Invitations;
