import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import AddSkills from "./Modals/AddSkills";
import ShowEndorsedList from "./Modals/ShowEndorsedList";
import "./Skills.css";

const skillsData = [
  {
    skill: "Competitive Coding",
    endorsed: 4,
  },
  {
    skill: "React JS",
    endorsed: 13,
  },
  {
    skill: "Node JS",
    endorsed: 19,
  },
  {
    skill: "DJango",
    endorsed: 25,
  },
  {
    skill: "C++",
    endorsed: 30,
  },
  {
    skill: "Cascading Style Sheet",
    endorsed: 7,
  },
];

class Skills extends Component {
  state = {
    showModal: false,
    skills: skillsData,
    displaySkills: skillsData.slice(0, 3),
    showingAllSkills: false,
    modalNum: null,
    modalData: null,
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2500)
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
  deleteSkill = (id) => {
    // console.log(this.state.skills);
    // console.log(this.state.displaySkills);
    // let skillArr = this.state.skills;
    // skillArr.splice(id,1);
    // this.setState({
    //   skills : skillArr,
    //   // displaySkills : skillArr.slice(0,3)
    // })
    // console.log(this.state.skills);
    // console.log(this.state.displaySkills);

    let skillArr = this.state.skills;
    skillArr.splice(id, 1);
    let displayArr = skillArr.slice(0, 3);
    this.setState({
      skills: skillArr,
      displaySkills: displayArr,
    });
  };
  showEndorseList = (data) => {
    this.setState({
      showModal: true,
      modalNum: 2,
      modalData: data,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <h5 style={{marginBottom : '20px'}} className="profStrength">
            <Skeleton height={21} width={210} />
          </h5>
          <Skeleton style={{marginBottom:'12px'}} height={15} width={170}/><br/>
          <Skeleton style={{marginBottom:'12px'}} height={15} width={130}/><br/>
          <Skeleton style={{marginBottom:'12px'}} height={15} width={150}/><br/>
          <Skeleton style={{marginBottom:'12px'}} height={15} width={170}/><br/>
        </>
      );
    }

    let conditionalButton = null;
    if (this.state.skills.length > 3) {
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
    if (this.state.skills.length === 0) {
      skillsData = (
        <div style={{ textAlign: "center", transform: "translateY(-10px)" }}>
          <h6 style={{ fontWeight: "350", color: "darkgrey" }}>
            You have not added any skills to showcase
          </h6>
        </div>
      );
    }
    if (this.state.skills.length !== 0) {
      skillsData = this.state.displaySkills.map((elem, id) => {
        return (
          <div className="skillBox">
            <h6
              onClick={() => {
                this.showEndorseList(elem);
              }}
              className="skill"
            >
              <span className="skillName">{elem.skill}</span>
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
              <span className="endorse">{elem.endorsed}</span>
            </h6>
            <div onClick={() => this.deleteSkill(id)} className="editDiv">
              {/* <i class="fas fa-pencil-alt"></i> */}
              {/* <i class="fas fa-trash"></i> */}
              <i class="fas fa-times"></i>
              {/* <span style={{fontSize:'12px'}}>remove</span> */}
            </div>
          </div>
        );
      });
    }

    let modalData = null;
    if (this.state.showModal && this.state.modalNum === 1) {
      modalData = (
        <AddSkills
          hideModal={this.hideModal}
          // addExperience={this.addExperience}
        />
      );
    }
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
        <div onClick={() => this.displayModal(1)} className="addExper">
          <i class="fas fa-plus"></i>
        </div>
        {skillsData}
        {conditionalButton}
      </>
    );
  }
}

export default Skills;
