import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "./Experience.css";
import defaultCompImg from "../../../../assets/defaultInstitute.png";
import axios from "../../../../API/baseURL/baseURL";
import moment from "moment";

class Experience extends Component {
  state = {
    experData: [],
    eduData: [],
    isLoading: true,
    userID: this.props.userID,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profId = localStorage.getItem("profileID");
    axios
      .get(`/user/profile/get_work/${this.state.userID}/`, config)
      .then((res) => {
        console.log(res);
        this.setState({ isLoading: false, experData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/user/profile/get_academic/${this.state.userID}`, config)
      .then((res) => {
        console.log(res);
        this.setState({ isLoading: false, eduData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <h5 style={{ color: "red !important" }} className="profStrength">
            <Skeleton height={21} width={210} />
          </h5>
          <div className="exper" style={{ border: "none" }}>
            <div className="experLeft">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "12px" }}
                width={56}
                height={56}
              />
            </div>
            <div className="experMid">
              <h6 className="position">
                <Skeleton width={170} height={17} />
              </h6>
              <h6 className="industry">
                <Skeleton width={140} height={14} />
              </h6>
              <h6>
                <h6 className="time">
                  <Skeleton height={12} width={80} />
                </h6>
              </h6>
            </div>
          </div>
          <div className="exper" style={{ border: "none" }}>
            <div className="experLeft">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "12px" }}
                width={56}
                height={56}
              />
            </div>
            <div className="experMid">
              <h6 className="position">
                <Skeleton width={170} height={17} />
              </h6>
              <h6 className="industry">
                <Skeleton width={140} height={14} />
              </h6>
              <h6>
                <h6 className="time">
                  <Skeleton height={12} width={80} />
                </h6>
              </h6>
            </div>
          </div>
          <h5 style={{ color: "red !important" }} className="profStrength">
            <Skeleton height={21} width={210} />
          </h5>
          <div className="exper" style={{ border: "none" }}>
            <div className="experLeft">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "12px" }}
                width={56}
                height={56}
              />
            </div>
            <div className="experMid">
              <h6 className="position">
                <Skeleton width={170} height={17} />
              </h6>
              <h6 className="industry">
                <Skeleton width={140} height={14} />
              </h6>
              <h6>
                <h6 className="time">
                  <Skeleton height={12} width={80} />
                </h6>
              </h6>
            </div>
          </div>
        </>
      );
    }

    let experData = null;
    let eduData = null;

    if (this.state.experData.length === 0) {
      experData = (
        <div style={{ textAlign: "center", transform: "translateY(-10px)" }}>
          <h6 style={{ fontWeight: "350", color: "darkgrey" }}>
            User has not added any past experinces
          </h6>
        </div>
      );
    }

    if (this.state.experData.length !== 0) {
      experData = this.state.experData.map((exper, index) => {
        let compLogoSrc = exper.img;
        if (compLogoSrc === null || compLogoSrc === undefined) {
          compLogoSrc = defaultCompImg;
        }

        return (
          <div className="exper">
            <div className="experLeft">
              <img src={compLogoSrc} />
            </div>
            <div className="experMid">
              <h6 className="position">{exper.position}</h6>
              <h6 className="industry">{exper.organization_name}</h6>
              <h6>
                <span className="time">{exper.start_date} - </span>
                <span className="time">{exper.end_date}</span>
              </h6>
            </div>
            {/* <div onClick={() => this.displayEditModal(exper,id)} className="experRight"> */}
          </div>
        );
      });
    }

    if (this.state.eduData.length === 0) {
      eduData = (
        <div style={{ textAlign: "center", transform: "translateY(-10px)" }}>
          <h6 style={{ fontWeight: "350", color: "darkgrey" }}>
            User has not added any past education history
          </h6>
        </div>
      );
    }

    if (this.state.eduData.length !== 0) {
      eduData = this.state.eduData.map((edu, index) => {
        let compLogoSrc = edu.img;
        if (compLogoSrc === null || compLogoSrc === undefined) {
          compLogoSrc = defaultCompImg;
        }

        return (
          <div className="exper">
            <div className="experLeft">
              <img src={compLogoSrc} />
            </div>
            <div className="experMid">
              {/* <h6 className="position">{edu.position}</h6> */}
              <h6 className="position">Student</h6>
              <h6 className="industry">{edu.organization_name}</h6>
              <h6>
                <span className="time">{edu.start_date} - </span>
                <span className="time">{edu.end_date}</span>
              </h6>
            </div>
            {/* <div onClick={() => this.displayEditModal(exper,id)} className="experRight"> */}
          </div>
        );
      });
    }

    return (
      <>
        <h5 style={{ color: "red !important" }} className="profStrength">
          Experiences
        </h5>

        {experData}

        <div style={{ position: "relative", marginTop: "58px" }}>
          <h5 style={{ color: "red !important" }} className="profStrength">
            Education
          </h5>

          {eduData}
        </div>
      </>
    );
  }
}

export default Experience;
