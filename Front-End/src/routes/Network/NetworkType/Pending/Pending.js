import React, { Component } from "react";
import userImgSrc from "../../../../assets/profileSample.jpg";
import emptySrc from "../../../../assets/empty.png";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "../../../../API/baseURL/baseURL";
import defaultUserPic from "../../../../assets/defaultProfilePic.png";

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

class Connections extends Component {
  state = {
    loading: true,
    pending: null,
  };

  componentDidMount() {
    // setTimeout(()=>{
    // this.setState({loading:false});
    // },2000)

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`/user/network/view/pending_connection/?filter=sent`, config)
      .then((res) => {
        console.log(res);
        this.setState({ pending: res.data });
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ pending: [], loading: false });
      });
  }

  removeConnection = (id, connectionId) => {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`/user/network/delete/connection/${connectionId}/`, config)
      .then((res) => {
        console.log(res);
        let newInvitationsArray = this.state.pending;
        console.log(newInvitationsArray);
        newInvitationsArray.splice(id, 1);
        this.setState({ pending: newInvitationsArray });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.pending);
  };

  render() {
    let connectionsData = null;

    if (this.state.loading) {
      connectionsData = (
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

    if (
      this.state.pending !== null 
      // &&
      // this.state.pending && 
      // !this.state.loading
    ) {
      connectionsData = this.state.pending.map((item, index) => {
        let id = index;
        let imgSrc = item.connection_avatar;
        if (imgSrc === null) {
          imgSrc = defaultUserPic;
        }
        let initialData = (
          <>
            <NavLink to={`/user/${item.profile_id}`}>
              <div className="connectionFirst">
                <img src={imgSrc} />
              </div>
              <div className="connectionSecond">
                <h6 className="connectionName">{item.connection_name}</h6>
                <h6 className="connectionDomain">{item.connection_tagline}</h6>
              </div>
            </NavLink>
            <div className="connectionThird">
              <h6 onClick={() => this.removeConnection(id, item.connection_id)}>
                Withdraw
              </h6>
              {/* <button>Message</button> */}
            </div>
          </>
        );
        return (
          <div className="connection savedJob">
            {initialData}
            {/* <div className="connectionThird">
              <h6 onClick={() => this.removeConnection(index)}>Remove</h6>
              <button>Message</button>
            </div> */}
          </div>
        );
      });
    }

    if (
      // this.state.pending ||
      // this.state.pending === "" 
      !this.state.loading &&
      this.state.pending.length === 0
    ) {
      connectionsData = (
        <div className="emptyImgDiv">
          <img src={emptySrc} className="emptyImg" />
        </div>
      );
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Sent requests</h6>
        <div className="savedJobsDisplay">{connectionsData}</div>
      </div>
    );
  }
}

export default Connections;
