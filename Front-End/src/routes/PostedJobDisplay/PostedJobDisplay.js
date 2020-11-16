import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import defaultCompImg from "../../assets/defaultInstitute.png";
import defaultUserPic from "../../assets/defaultProfilePic.png";
import "./PostedJobDisplay.css";
import { NavLink } from "react-router-dom";

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
  payRange: "50,000 - 80,000rs/month",
  applicants: [
    {
      userID: 21,
      userName: "Aditya Pratap Singh",
      tagline: "Web Developer at Software Incubator (SDC-SI)",
      userImg: null,
    },
    {
      userID: 21,
      userName: "Amy Santiago",
      tagline: "App Developer at Software Incubator (SDC-SI)",
      userImg: null,
    },
  ],
};

class PostedJobDisplay extends Component {
  state = {
    jobData: postedJobData,
    postedJobId: this.props.match.params.id,
  };

  render() {
    let companyImgSrc = this.state.jobData.companyImg;
    if (companyImgSrc === null) {
      companyImgSrc = defaultCompImg;
    }

    let applicantsData = null;
    if (this.state.jobData.applicants.length !== 0) {
      applicantsData = this.state.jobData.applicants.map((user, index) => {
        let userImgSrc = user.userImg;
        if (userImgSrc === null) {
          userImgSrc = defaultUserPic;
        }
        return (
          <div className="user">
            <NavLink to={`/user/${user.userID}`}>
              <img src={userImgSrc} />
            </NavLink>

            <div className="userDesc">
              <NavLink to={`/user/${user.userID}`}>
                <h6 className="userName">{user.userName}</h6>
                <h6 className="userTagline">{user.tagline}</h6>
              </NavLink>
              <div className='buttons'>
                <h6 className="acceptButton">Accept</h6>
                <h6 className="rejectButton">Reject</h6>
              </div>
            </div>
          </div>
        );
      });
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
                <h6 className="industry">{this.state.jobData.industry}</h6>
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

            <h6 className="jobDesc">{this.state.jobData.jobDescription}</h6>

            <div className="strike"></div>

            <h6 style={{ paddingLeft: "35px", marginBottom: "18px" }}>
              Applicants
            </h6>
            {applicantsData}

            <div className='strike'></div>

            <div className='jobDiv'>
              <h6 className='head'>Job Employment:</h6>
              <h6 className='sub'>{this.state.jobData.empType}</h6>
            </div>
            <div className='jobDiv'>
              <h6 className='head'>Industry:</h6>
              <h6 className='sub'>{this.state.jobData.industry}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostedJobDisplay;
