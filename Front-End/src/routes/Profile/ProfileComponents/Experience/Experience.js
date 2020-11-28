import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import AddExperience from "./Modals/AddExperience";
import "./Experience.css";
import defaultCompImg from "../../../../assets/defaultInstitute.png";
// import EditExperience from "./Modals/EditExperience";
import AddEducation from "./Modals/AddEducation";
import axios from '../../../../API/baseURL/baseURL';
import * as actionTypes from "../../../../store/actions/actionTypes";
import { connect } from "react-redux";
import moment from "moment";

// const experience = [
//   {
//     img: null,
//     position: "App Developer",
//     industry: "Software Incubator (SDC-SI)",
//     startTime: "Oct 2019",
//     endTime: "Nov 2020",
//   },
//   {
//     img: defaultCompImg,
//     position: "Web Developer",
//     industry: "Software Incubator (SDC-SI)",
//     startTime: "Oct 2019",
//     endTime: "Nov 2020",
//   },
// ];

// const education = [
//   {
//     img: null,
//     institute: "AJAY KUMAR GARG ENGINEERING COLLEGE",
//     location: "Ghaziabad, Uttar Pradesh",
//     startTime: "Oct 2019",
//     endTime: "Nov 2020",
//   },
//   {
//     img: null,
//     institute: "ASSISI CONVENT SCHOOL",
//     location: "Noida, Uttar Pradesh",
//     startTime: "July 2019",
//     endTime: "Nov 2017",
//   },
// ];

class Experience extends Component {
  state = {
    showModal: false,
    modalNum: null,
    experData: [],
    eduData: [],
    isLoading: true,
  };

  componentDidMount(){
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profId = localStorage.getItem('profileID');
    axios.get(`/user/profile/get_work/${profId}/`,config)
      .then((res)=>{
        console.log(res);
        this.setState({isLoading : false,experData : res.data});
      })
      .catch((err)=>{
        console.log(err);
      })

    axios.get(`/user/profile/get_academic/${profId}`,config)
    .then((res)=>{
      console.log(res);
      this.setState({isLoading : false,eduData : res.data});
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  displayModal = (id) => {
    this.setState({ showModal: true, modalNum: id });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  addExperience = (details) => {
    // let oldArr = this.state.experData;

    let profID = localStorage.getItem("profileID");
    let newExperData = {
      user: profID,
      // img: details.compLogo,
      position: details.position,
      organization_name: details.industry,
      // start_date: details.startDate,
      // end_date: details.endDate,
      start_date: moment(details.startDate).format('YYYY-MM-DD'),
      end_date: moment(details.endDate).format('YYYY-MM-DD'),
      headline: details.headline
    };

    if(details.headline){
      this.props.editTagline(`${details.position} at ${details.industry}`);
    }

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.post(`/user/profile/work/`,newExperData,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })

    let newArr = [newExperData];
    for (let index in this.state.experData) {
      newArr.push(this.state.experData[index]);
    }
    console.log("Parent Add Exper");
    console.log(newArr);
    this.setState({ experData: newArr });
  };

  addEducation = (details) => {

    let profID = localStorage.getItem("profileID");
    let newEduData = {
      // img: details.compLogo,
      // position: 'Student',
      user: profID,
      organization_name: details.institute,
      // start_date: details.startDate,
      // end_date: details.endDate,
      start_date : moment(details.startDate).format('YYYY-MM-DD'),
      end_date : moment(details.startDate).format('YYYY-MM-DD'),
      headline : details.headline,
    };

    console.log(newEduData);

    if(details.headline){
      this.props.editTagline2(`Student at ${details.institute}`);
    }

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.post("/user/profile/education/",newEduData,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })


    // let newArr = [{...newExperData},{...oldArr}];
    let newArr = [newEduData];
    for (let index in this.state.eduData) {
      newArr.push(this.state.eduData[index]);
    }
    console.log("Parent Add Edu");
    console.log(newArr);
    this.setState({ eduData: newArr });
  };

  deleteExperience = (id,index) => {
    let Arr = this.state.experData;
    Arr.splice(index, 1);
    this.setState({ experData: Arr });

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.delete(`/user/profile/work/${id}/`,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  };

  deleteEducation = (id,index) => {
    let Arr = this.state.eduData;
    Arr.splice(index, 1);
    this.setState({ eduData: Arr });
    
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.delete(`/user/profile/education/${id}/`,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
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
            <div
              onClick={() => this.deleteExperience(exper.id,index)}
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
      eduData = this.state.eduData.map((edu,index) => {
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
            <div
              onClick={() => this.deleteEducation(edu.id,index)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    editTagline : (data) => dispatch({type : actionTypes.EDIT_TAGLINE, tagline : data}),
    editTagline2 : (data) => dispatch({type : actionTypes.EDIT_TAGLINE2, tagline : data}),
  };
};

export default connect(null, mapDispatchToProps)(Experience);
