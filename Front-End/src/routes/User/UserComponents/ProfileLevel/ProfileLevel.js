import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "./ProfileLevel.css";

const profileData = {
  strength: "Intermediate",
  strengthInt: 6,
};

class ProfileLevel extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2600);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Skeleton width={300} height={22} />
          <Skeleton style={{ marginTop: "20px" }} width="100%" height={14} />
        </>
      );
    }

    let style1 = null;
    let style2 = null;
    let style3 = null;
    let style4 = null;
    let style5 = null;
    let style6 = null;
    let style7 = null;
    let interStyle = {
      color: "rgb(167, 167, 167)",
    };
    let starStyle = {
      color: "rgb(167, 167, 167)",
      border: "rgb(167, 167, 167) 2px solid",
    };

    if (profileData.strengthInt === 1) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
    }
    if (profileData.strengthInt === 2) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
      style2 = {
        background: "linear-gradient(to right,#0A66C2,#378FE9)",
      };
    }
    if (profileData.strengthInt === 3) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
      style2 = {
        background: "linear-gradient(to right,#0A66C2,#378FE9)",
      };
      style3 = {
        background: "linear-gradient(to right,#378FE9,#70B5F9)",
      };
    }
    if (profileData.strengthInt === 4) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
      style2 = {
        background: "linear-gradient(to right,#0A66C2,#378FE9)",
      };
      style3 = {
        background: "linear-gradient(to right,#378FE9,#70B5F9)",
      };
      style4 = {
        background: "linear-gradient(to right,#70B5F9,#3EC786)",
      };
      interStyle = {
        // color: "blue",
        color: "#0A66C2"
      };
    }
    if (profileData.strengthInt === 5) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
      style2 = {
        background: "linear-gradient(to right,#0A66C2,#378FE9)",
      };
      style3 = {
        background: "linear-gradient(to right,#378FE9,#70B5F9)",
      };
      style4 = {
        background: "linear-gradient(to right,#70B5F9,#3EC786)",
      };
      style5 = {
        background: "linear-gradient(to right,#3EC786,#057642)",
      };
      interStyle = {
        // color: "blue",
        color: "#0A66C2"
      };
    }
    if (profileData.strengthInt === 6) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
      style2 = {
        background: "linear-gradient(to right,#0A66C2,#378FE9)",
      };
      style3 = {
        background: "linear-gradient(to right,#378FE9,#70B5F9)",
      };
      style4 = {
        background: "linear-gradient(to right,#70B5F9,#3EC786)",
      };
      style5 = {
        background: "linear-gradient(to right,#3EC786,#057642)",
      };
      style6 = {
        background: "linear-gradient(to right,#057642,#07522f)",
      };
      interStyle = {
        // color: "blue",
        color: "#0A66C2"
      };
    }
    if (profileData.strengthInt === 7) {
      style1 = {
        background: "linear-gradient(to right,#004182,#0A66C2)",
      };
      style2 = {
        background: "linear-gradient(to right,#0A66C2,#378FE9)",
      };
      style3 = {
        background: "linear-gradient(to right,#378FE9,#70B5F9)",
      };
      style4 = {
        background: "linear-gradient(to right,#70B5F9,#3EC786)",
      };
      style5 = {
        background: "linear-gradient(to right,#3EC786,#057642)",
      };
      style6 = {
        background: "linear-gradient(to right,#057642,#07522f)",
      };
      style7 = {
        background: "linear-gradient(to right,#07522f,#07522f)",
      };
      interStyle = {
        // color: "blue",
        color: "#0A66C2"
      };
      starStyle = {
        color: "#07522f",
        border: "#07522f 2px solid",
      };
    }

    return (
      <>
        <h5 className="profStrength">
          Profile Strength :
          <span className="profStrengthString"> {profileData.strength}</span>
        </h5>

        <div className="profileBar">
          <div style={style1}></div>
          <div style={style2}></div>
          <div style={style3}></div>
          <div style={style4}></div>
          {/* <div className="inter"> */}
          <i style={interStyle} class="inter fas fa-check-circle"></i>
          {/* </div> */}
          <div style={style5}></div>
          <div style={style6}></div>
          <div style={style7}></div>
          <div style={starStyle} className="star">
            {/* <i class="far fa-star"></i> */}
            <i class="fas fa-star"></i>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileLevel;
