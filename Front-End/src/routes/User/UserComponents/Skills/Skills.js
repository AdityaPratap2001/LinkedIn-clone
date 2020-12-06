import Axios from "axios";
import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import ShowEndorsedList from "./Modals/ShowEndorsedList";
import axios from '../../../../API/baseURL/baseURL';
import "./Skills.css";

const skillsData = [
  {
    skill: "Competitive Coding",
    endorsed: 4,
    isEndorsed: true,
    list: [
      {
        profPic: null,
        firstName: "Aryan",
        lastName: "Kishore",
        position: "Web Developer",
        industry: "IIT Kharagpur",
      },
      {
        profPic: null,
        firstName: "Aryan",
        lastName: "Kishore",
        position: "Web Developer",
        industry: "IIT Kharagpur",
      },
    ],
  },
  {
    skill: "React JS",
    endorsed: 13,
    isEndorsed: false,
  },
  {
    skill: "Node JS",
    endorsed: 19,
    isEndorsed: true,
  },
  {
    skill: "DJango",
    endorsed: 25,
    isEndorsed: false,
  },
  {
    skill: "C++",
    endorsed: 30,
    isEndorsed: true,
  },
  {
    skill: "Cascading Style Sheet",
    endorsed: 7,
    isEndorsed: true,
  },
];

class Skills extends Component {
  state = {
    showModal: false,
    // skills: skillsData,
    // displaySkills: skillsData.slice(0, 3),
    skills: null,
    displaySkills: null,
    showingAllSkills: false,
    modalNum: null,
    modalData: null,
    isLoading: true,
    connectStatus: "connected",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profId = localStorage.getItem("profileID");
    axios
      .get(`/user/profile/skills/${this.props.userID}/`, config)
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          skills: res.data.skills_list,
          displaySkills: res.data.skills_list.slice(0, 3),
          skillID: res.data.id,
        });
        // console.log(this.state.displaySkills);
      })
      .catch((err) => {
        console.log(err.response);
        // console.log(this.state);
        // // if (err.response.status === 404) {
        this.setState({ isLoading: false, skills: [] });
        // }
      });
  }

  displayModal = (id) => {
    this.setState({ showModal: true, modalNum: id });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  showMore = () => {
    this.setState({
      displaySkills: this.state.skills,
      showingAllSkills: true,
    });
  };
  showLess = () => {
    this.setState({
      displaySkills: this.state.skills.slice(0, 3),
      showingAllSkills: false,
    });
  };
  showEndorseList = (data) => {
    this.setState({
      showModal: true,
      modalNum: 2,
      modalData: data,
    });
  };

  endorseSkill = (id) => {
    let arr = this.state.skills;
    arr[id].isEndorsed = true;
    arr[id].endorsed = arr[id].endorsed + 1;
    this.setState({ skills: arr });
  };
  unendorseSkill = (id) => {
    let arr = this.state.skills;
    arr[id].isEndorsed = false;
    if (arr[id].endorsed !== 0) {
      arr[id].endorsed = arr[id].endorsed - 1;
    }
    this.setState({ skills: arr });
  };

  hideAlert = () => {
    this.setState({ showAlert: false });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <h5 style={{ marginBottom: "20px" }} className="profStrength">
            <Skeleton height={21} width={210} />
          </h5>
          <Skeleton style={{ marginBottom: "12px" }} height={15} width={170} />
          <br />
          <Skeleton style={{ marginBottom: "12px" }} height={15} width={130} />
          <br />
          <Skeleton style={{ marginBottom: "12px" }} height={15} width={150} />
          <br />
          <Skeleton style={{ marginBottom: "12px" }} height={15} width={170} />
          <br />
        </>
      );
    }

    let conditionalButton = null;
    if (this.state.skills !== null && this.state.skills.length > 3) {
      if (!this.state.showingAllSkills) {
        conditionalButton = (
          <h6 onClick={this.showMore} className="showMore">
            Show More
          </h6>
        );
      }
      if (this.state.showingAllSkills) {
        conditionalButton = (
          <h6 onClick={this.showLess} className="showMore">
            Show Less
          </h6>
        );
      }
    }

    let skillsData = null;
    if (this.state.skills !== null && this.state.skills.length === 0) {
      skillsData = (
        <div style={{ textAlign: "center", transform: "translateY(-10px)" }}>
          <h6 style={{ fontWeight: "350", color: "darkgrey" }}>
            User has not added any skills to showcase
          </h6>
        </div>
      );
    }
    if (this.state.skills !== null && this.state.skills.length !== 0) {
      skillsData = this.state.displaySkills.map((elem, id) => {
        let endorseIcon = null;
        if (this.state.connectStatus === "connected") {
          if (elem.isEndorsed) {
            endorseIcon = (
              <i
                onClick={() => this.unendorseSkill(id)}
                class="far endorseIcon fa-check-circle"
              ></i>
            );
          }
          if (!elem.isEndorsed) {
            endorseIcon = (
              <i
                onClick={() => this.endorseSkill(id)}
                class="fas endorseIcon fa-plus-circle"
              ></i>
            );
          }
        }
        if (
          this.state.connectStatus === "notConnected" ||
          this.state.connectStatus === "pending"
        ) {
          endorseIcon = null;
        }

        return (
          <div className="skillBox">
            <h6 className="skill">
              {/* {endorseIcon} */}
              <span
                onClick={() => {
                  this.showEndorseList(elem);
                }}
                className="skillName"
              >
                {/* {elem.skill} */}
                {elem}
              </span>
              <span
                style={{
                  transform: "translateY(-8px) scale(1.6)",
                  marginRight: "10px",
                  fontWeight: "500",
                  color: "rgb(112, 112, 112)",
                  textDecoration: "none !important",
                }}
              >
                .
              </span>
              <span
                onClick={() => {
                  this.showEndorseList(elem);
                }}
                className="endorse"
              >
                {elem.endorsed}
              </span>
            </h6>
          </div>
        );
      });
    }

    let modalData = null;
    if (this.state.showModal && this.state.modalNum === 2) {
      modalData = (
        <ShowEndorsedList
          data={this.state.modalData}
          hideModal={this.hideModal}
          // addExperience={this.addExperience}
        />
      );
    }

    return (
      <>
        {modalData}
        <h5 style={{ color: "red !important" }} className="profStrength">
          Skills & Endorsements
        </h5>
        {skillsData}
        {conditionalButton}
      </>
    );
  }
}

export default Skills;
