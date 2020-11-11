import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import AddExperience from "./Modals/AddExperience";
import "./Experience.css";
import defaultCompImg from "../../../../assets/defaultInstitute.png";
// import EditExperience from "./Modals/EditExperience";
import AddEducation from "./Modals/AddEducation";

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
    showModal: false,
    modalNum: null,
    experData: experience,
    eduData: education,
    isLoading: true,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2600)
  }

  displayModal = (id) => {
    this.setState({ showModal: true, modalNum: id });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  addExperience = (details) => {
    // let oldArr = this.state.experData;
    let newExperData = {
      img: details.compLogo,
      position: details.position,
      industry: details.industry,
      startTime: details.startDate,
      endTime: details.endDate,
    };
    // let newArr = [{...newExperData},{...oldArr}];
    let newArr = [newExperData];
    for (let index in this.state.experData) {
      newArr.push(this.state.experData[index]);
    }
    console.log("Parent Add Exper");
    console.log(newArr);
    this.setState({ experData: newArr });
  };

  addEducation = (details) => {
    let newEduData = {
      img: details.compLogo,
      institute: details.institute,
      location: details.location,
      startTime: details.startDate,
      endTime: details.endDate,
    };
    // let newArr = [{...newExperData},{...oldArr}];
    let newArr = [newEduData];
    for (let index in this.state.eduData) {
      newArr.push(this.state.eduData[index]);
    }
    console.log("Parent Add Edu");
    console.log(newArr);
    this.setState({ eduData: newArr });
  };

  deleteExperience = (id) => {
    let Arr = this.state.experData;
    Arr.splice(id, 1);
    this.setState({ experData: Arr });
  };

  deleteEducation = (id) => {
    let Arr = this.state.eduData;
    Arr.splice(id, 1);
    this.setState({ eduData: Arr });
  };

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

    let modalData = null;
    if (this.state.showModal && this.state.modalNum === 1) {
      modalData = (
        <AddExperience
          hideModal={this.hideModal}
          addExperience={this.addExperience}
        />
      );
    }
    if (this.state.showModal && this.state.modalNum === 2) {
      modalData = (
        <AddEducation
          hideModal={this.hideModal}
          addEducation={this.addEducation}
        />
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
            {/* <div onClick={() => this.displayEditModal(exper,id)} className="experRight"> */}
            <div
              onClick={() => this.deleteExperience(id)}
              className="experRight"
            >
              <div className="editDiv">
                {/* <i class="fas fa-pencil-alt"></i> */}
                <i class="fas fa-trash"></i>
              </div>
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
            {/* <div onClick={() => this.displayEditModal(exper,id)} className="experRight"> */}
            <div
              onClick={() => this.deleteEducation(id)}
              className="experRight"
            >
              <div className="editDiv">
                {/* <i class="fas fa-pencil-alt"></i> */}
                <i class="fas fa-trash"></i>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <>
        {modalData}
        <h5 style={{ color: "red !important" }} className="profStrength">
          Experiences
        </h5>
        <div onClick={() => this.displayModal(1)} className="addExper">
          <i class="fas fa-plus"></i>
        </div>
        {experData}

        <div style={{ position: "relative", marginTop: "58px" }}>
          <h5 style={{ color: "red !important" }} className="profStrength">
            Education
          </h5>
          <div
            onClick={() => this.displayModal(2)}
            className="addExper addExper2"
          >
            <i class="fas fa-plus"></i>
          </div>
          {eduData}
        </div>
      </>
    );
  }
}

export default Experience;
