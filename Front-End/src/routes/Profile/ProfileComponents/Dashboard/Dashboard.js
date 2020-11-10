import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "./Dashboard.css";

const dashBoardData = {
  views: 80,
  views2: 237,
  views3: 24,
};

class Dashboard extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2800);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Skeleton width={170} height={18} />
          <br />
          <Skeleton style={{ marginTop: "14px" }} width={100} height={13} />
          
          <div className="dashboardBox">
            <div style={{ borderRight: "#ccc 1px solid" }}>
              <Skeleton height={35} width={40}/>
              <Skeleton style={{marginTop:'18px'}} height={13} width={80}/>
            </div>
            <div style={{ borderRight: "#ccc 1px solid" }}>
              <Skeleton height={35} width={40}/>
              <Skeleton style={{marginTop:'18px'}} height={13} width={80}/>
            </div>
            <div>
              <Skeleton height={35} width={40}/>
              <Skeleton style={{marginTop:'18px'}} height={13} width={80}/>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <h5 className="profStrength">Your Dashboard</h5>
        <h6>
          <i>Private to you</i>
        </h6>
        <div className="dashboardBox">
          <div style={{ borderRight: "#ccc 1px solid" }}>
            <h5>{dashBoardData.views}</h5>
            <h6>People viewed your profile</h6>
          </div>
          <div style={{ borderRight: "#ccc 1px solid" }}>
            <h5>{dashBoardData.views2}</h5>
            <h6>Video views</h6>
          </div>
          <div>
            <h5>{dashBoardData.views3}</h5>
            <h6>Search appearances</h6>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
