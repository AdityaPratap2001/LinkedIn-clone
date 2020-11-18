import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import defaultCompImg from "../../assets/defaultInstitute.png";
import defaultUserPic from "../../assets/defaultProfilePic.png";
import "./PostedJobDisplay.css";
import { NavLink, Redirect } from "react-router-dom";
import axios from "../../API/baseURL/baseURL";
import Skeleton from 'react-loading-skeleton';

// let postedJobData = {
//   jobTitle: "Web Developer",
//   company: "KV Shopgood Pvt Ltd.",
//   companyImg: null,
//   location: "Kanpur, Uttar Pradesh, India",
//   numOfApplicants: 14,
//   empType: "Internship",
//   // jobDescription : "Responsible For Website, Android & Ios App Developing, Coding, Fixing Errors Creating User Friendly Website. ....A Web Developer is responsible for the coding, design and layout of a website according to a company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.(Ref:www.teamlease.com,teamlease)",
//   jobDescription: `I just published "How we brought down storage costs for the Ads platform: Part 1"

// If you feel you are up for exciting work like this every day, do drop me a DM. We are always looking out for engineers like you at ShareChat. 🚀
  
// #startups #techblog #hiringdevelopers`,
//   industry: "Design , Computer Software , Internet",
//   // payRange: "50,000 - 80,000rs/month",
//   payRange: null,
//   applicants: [
//     {
//       userID: 21,
//       userName: "Aditya Pratap Singh",
//       tagline: "Web Developer at Software Incubator (SDC-SI)",
//       userImg: null,
//     },
//     {
//       userID: 21,
//       userName: "Amy Santiago",
//       tagline: "App Developer at Software Incubator (SDC-SI)",
//       userImg: null,
//     },
//   ],
// };

class PostedJobDisplay extends Component {
  state = {
    jobData: null,
    postedJobId: this.props.match.params.id,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`/user/profile/vacancy/${this.state.postedJobId}`, config)
      .then((res) => {
        console.log(res);
        this.setState({ jobData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    let companyImgSrc = null;
    if (this.state.jobData) {
      companyImgSrc = this.state.jobData.file_linked;
    }
    if (companyImgSrc === null) {
      companyImgSrc = defaultCompImg;
    }

    let applicantsData = (
      <div className="payUnavailable">
        {/* <h6>Pay range unavailable</h6> */}
        <h5>
          <i>No applicants yet.</i>
        </h5>
      </div>
    );
    if (
      this.state.jobData !== null &&
      this.state.jobData.applicants.length !== 0
    ) {
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
              <div className="buttons">
                <h6 className="acceptButton">Accept</h6>
                <h6 className="rejectButton">Reject</h6>
              </div>
            </div>
          </div>
        );
      });
    }

    let payData = (
      <div className="payUnavailable">
        <h6>Pay range unavailable</h6>
        <h5>
          <i>Salary information is not available at the moment.</i>
        </h5>
      </div>
    );
    if (
      this.state.jobData !== null &&
      this.state.jobData.pay_range !== "null"
    ) {
      payData = (
        <div className="jobDiv" style={{ marginTop: "14px" }}>
          <h6 className="head" style={{marginBottom:'4px'}}>Pay Range</h6>
          <h6 className="sub">{this.state.jobData.pay_range}</h6>
        </div>
      );
    }

    let displayData = <h6>Loading</h6>;
    if (this.state.jobData) {
      displayData = (
        <>
          {/* {this.state.postedJobId} */}
          <div className="header">
            <img src={companyImgSrc} />
            <div>
              <h6 className="jobName">{this.state.jobData.title}</h6>
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
                Number of applicants - {this.state.jobData.applicants.length}
              </li>
              <li>Employment type - {this.state.jobData.employment_type}</li>
            </ul>
          </div>

          <div className="strike"></div>

          {/* <h6 style={{paddingLeft:'35px'}}>Description</h6> */}
          <h6 className="jobDesc">{this.state.jobData.description}</h6>

          <div className="strike"></div>

          <h6 style={{ paddingLeft: "35px", marginBottom: "18px" }}>
            Applicants
          </h6>
          {applicantsData}

          <div className="strike"></div>

          <div className="jobDiv" style={{ marginTop: "14px" }}>
            <h6 className="head">Job Employment</h6>
            <h6 className="sub">{this.state.jobData.employment_type}</h6>
          </div>
          <div className="jobDiv">
            <h6 className="head">Industry</h6>
            <h6 className="sub">{this.state.jobData.industry}</h6>
          </div>

          <div className="strike"></div>

          {payData}
        </>
      );
    }

    if(this.state.jobData === null){
      displayData = (
        <div style={{padding : '20px 20px'}}>
          <div style={{display:'flex'}}>
            <div>
            <Skeleton style={{marginRight:'12px',marginBottom:'20px'}} width={100} height={100}/>
            </div>
            <div>
            <Skeleton width={300} height={15}/><br/>
            <Skeleton width={270} height={13}/><br/>
            <Skeleton width={230} height={11}/>
            </div>
          </div>

          <div>
            <Skeleton height={12} width='90%'/>
            <Skeleton height={12} width='85%'/>
            <Skeleton height={12} width='70%' style={{marginBottom:'15px'}}/>
            <Skeleton height={12} width='90%'/>
            <Skeleton height={12} width='85%'/>
            <Skeleton height={12} width='70%' style={{marginBottom:'15px'}}/>
            <Skeleton height={12} width='90%'/>
            <Skeleton height={12} width='85%'/>
            <Skeleton height={12} width='70%' style={{marginBottom:'15px'}}/>
            <Skeleton height={12} width='90%'/>
            <Skeleton height={12} width='85%'/>
            <Skeleton height={12} width='70%' style={{marginBottom:'15px'}}/>
          </div>
          
        </div>
      )
    }

    return (
      <div>
        <Navbar shadow={true} />

        <div className="jobsBody postedJobDisplay">
          <div className="sideBox">
            <ProfileSidebox />
          </div>

          <div className="rightDisplay">{displayData}</div>
        </div>
      </div>
    );
  }
}

export default PostedJobDisplay;
