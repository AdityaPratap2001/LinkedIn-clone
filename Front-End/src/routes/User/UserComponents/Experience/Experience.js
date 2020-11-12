import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "./Experience.css";
import defaultCompImg from "../../../../assets/defaultInstitute.png";

const experience = [
  {
    img: null,
    position: "App Developer",
    industry: "Software Incubator (SDC-SI)",
    startTime: "Oct 2019",
    endTime: "Nov 2020",
  },
  {
    img: defaultCompImg,
    position: "Web Developer",
    industry: "Software Incubator (SDC-SI)",
    startTime: "Oct 2019",
    endTime: "Nov 2020",
  },
];

const education = [
  {
    img: null,
    institute: "AJAY KUMAR GARG ENGINEERING COLLEGE",
    location: "Ghaziabad, Uttar Pradesh",
    startTime: "Oct 2019",
    endTime: "Nov 2020",
  },
  {
    img: null,
    institute: "ASSISI CONVENT SCHOOL",
    location: "Noida, Uttar Pradesh",
    startTime: "July 2019",
    endTime: "Nov 2017",
  },
];

class Experience extends Component {
  state = {
    experData: experience,
    eduData: education,
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
            You have not added any experiences
          </h6>
        </div>
      );
    }

    if (this.state.experData.length !== 0) {
      experData = this.state.experData.map((exper, id) => {
        let compLogoSrc = exper.img;
        if (compLogoSrc === null) {
          compLogoSrc = defaultCompImg;
        }

        return (
          <div className="exper">
            <div className="experLeft">
              <img src={compLogoSrc} />
            </div>
            <div className="experMid">
              <h6 className="position">{exper.position}</h6>
              <h6 className="industry">{exper.industry}</h6>
              <h6>
                <span className="time">{exper.startTime} - </span>
                <span className="time">{exper.endTime}</span>
              </h6>
            </div>
          </div>
        );
      });
    }

    if (this.state.eduData.length === 0) {
      eduData = (
        <div style={{ textAlign: "center", transform: "translateY(-10px)" }}>
          <h6 style={{ fontWeight: "350", color: "darkgrey" }}>
            You have not added any education history
          </h6>
        </div>
      );
    }

    if (this.state.eduData.length !== 0) {
      eduData = this.state.eduData.map((edu, id) => {
        let compLogoSrc = edu.img;
        if (compLogoSrc === null) {
          compLogoSrc = defaultCompImg;
        }

        return (
          <div className="exper">
            <div className="experLeft">
              <img src={compLogoSrc} />
            </div>
            <div className="experMid">
              <h6 className="position">{edu.institute}</h6>
              <h6 className="industry">{edu.location}</h6>
              <h6>
                <span className="time">{edu.startTime} - </span>
                <span className="time">{edu.endTime}</span>
              </h6>
            </div>
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
