import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import defaultCompImg from "../../assets/defaultInstitute.png";
import "./JobDisplay.css";

let postedJobData = {
  jobTitle: "Web Developer",
  company: "KV Shopgood Pvt Ltd.",
  companyImg: null,
  location: "Kanpur, Uttar Pradesh, India",
  numOfApplicants: 14,
  empType: "Internship",
  // jobDescription : "Responsible For Website, Android & Ios App Developing, Coding, Fixing Errors Creating User Friendly Website. ....A Web Developer is responsible for the coding, design and layout of a website according to a company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.(Ref:www.teamlease.com,teamlease)",
  jobDescription: `I just published "How we brought down storage costs for the Ads platform: Part 1"

If you feel you are up for exciting work like this every day, do drop me a DM. We are always looking out for engineers like you at ShareChat. 🚀
  
#startups #techblog #hiringdevelopers`,
  industry: "Design , Computer Software , Internet",
  // payRange: "50,000 - 80,000rs/month",
  payRange: null,
  isSaved: false,
  isApplied: false,
  myPostedJob: false,
};

class JobDisplay extends Component {
  state = {
    jobData: postedJobData,
    postedJobId: this.props.match.params.id,
    isSaved: postedJobData.isSaved,
    isApplied: postedJobData.isApplied,
    myPostedJob: postedJobData.myPostedJob
  };

  save = () => {
    alert('Saved Job');
    this.setState({isSaved : true});
  }
  unSave = () => {
    alert('Unsave Job');
    this.setState({isSaved : false});
  }
  apply = () => {
    alert('Apply job');
    this.setState({isApplied : true});
  }
  withdraw = () => {
    alert('Withdraw job');
    this.setState({isApplied : false});
  }

  render() {
    let companyImgSrc = this.state.jobData.companyImg;
    if (companyImgSrc === null) {
      companyImgSrc = defaultCompImg;
    }

    let payData = (
      <div className="payUnavailable">
        <h6>Pay range unavailable</h6>
        <h5>
          <i>Salary information is not available at the moment.</i>
        </h5>
      </div>
    );
    if (this.state.jobData.payRange) {
      payData = (
        <div className="jobDiv" style={{ marginTop: "14px" }}>
          <h6 className="head">Pay Range</h6>
          <h6 className="sub">{this.state.jobData.payRange}</h6>
        </div>
      );
    }

    let saveButton = <h6 onClick={this.save}>Save</h6>;
    if (this.state.isSaved) {
      saveButton = (
        <h6 onClick={this.unSave} style={{ backgroundColor: "rgb(82, 82, 255)", color: "white" }}>
          Unsave
        </h6>
      );
    }
    let applyButton = <h6 onClick={this.apply}>Apply</h6>;
    if (this.state.isApplied) {
      applyButton = (
        <h6 onClick={this.withdraw} style={{ backgroundColor: "rgb(82, 82, 255)", color: "white" }}>
          Withdraw
        </h6>
      );
    }

    let allButtonData = (
      <div className="headButtons">
        {saveButton}
        {applyButton}
      </div>
    );
    if (this.state.myPostedJob) {
      allButtonData = null;
    }

    return (
      <div>
        <Navbar shadow={true} />

        <div className="jobsBody postedJobDisplay">
          <div className="sideBox">
            <ProfileSidebox />
          </div>

          <div className="rightDisplay">
            {/* {this.state.postedJobId} */}
            <div className="header">
              <img src={companyImgSrc} />
              <div>
                <h6 className="jobName">{this.state.jobData.jobTitle}</h6>
                <h6 className="company">{this.state.jobData.company}</h6>
                <h6 className="location">{this.state.jobData.location}</h6>
                {/* <h6 className="industry">{this.state.jobData.industry}</h6> */}

                {allButtonData}
              </div>
            </div>

            <div className="strike"></div>

            <div className="topBottom">
              <h6>Job</h6>
              <ul>
                <li>
                  Number of applicants - {this.state.jobData.numOfApplicants}
                </li>
                <li>Employment type - {this.state.jobData.empType}</li>
              </ul>
            </div>

            <div className="strike"></div>

            {/* <h6 style={{paddingLeft:'35px'}}>Description</h6> */}
            <h6 className="jobDesc">{this.state.jobData.jobDescription}</h6>

            <div className="strike"></div>

            <div className="jobDiv" style={{ marginTop: "14px" }}>
              <h6 className="head">Job Employment</h6>
              <h6 className="sub">{this.state.jobData.empType}</h6>
            </div>
            <div className="jobDiv">
              <h6 className="head">Industry</h6>
              <h6 className="sub">{this.state.jobData.industry}</h6>
            </div>

            <div className="strike"></div>

            {payData}
          </div>
        </div>
      </div>
    );
  }
}

export default JobDisplay;
