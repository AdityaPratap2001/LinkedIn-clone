import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import defaultCompImg from "../../assets/defaultInstitute.png";
import axios from "../../API/baseURL/baseURL";
import Skeleton from "react-loading-skeleton";
import "./JobDisplay.css";
import { Redirect } from "react-router-dom";

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
//   isSaved: false,
//   isApplied: false,
//   myPostedJob: false,
// };

class JobDisplay extends Component {
  state = {
    jobData: null,
    jobId: this.props.match.params.id,
    isSaved: null,
    isApplied: null,
    myPostedJob: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`/user/profile/vacancy/${this.state.jobId}`, config)
      .then((res) => {
        console.log(res);
        this.setState({ 
          jobData: res.data,
          isSaved: res.data.is_bookmarked,
          isApplied: res.data.has_applied,
          myPostedJob: res.data.is_my_posted_vacancy,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  save = () => {
    // alert("Saved Job");
    // this.setState({ isSaved: true });
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(`/user/profile/vacancy/bookmark/${this.state.jobId}/`,config)
      .then((res) => {
        console.log(res);
        this.setState({ isSaved: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  unSave = () => {
    alert("Unsave Job");
    // this.setState({ isSaved: false });
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`/user/profile/vacancy/bookmark/${this.state.jobId}/`,config)
      .then((res) => {
        console.log(res);
        this.setState({ isSaved: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  apply = () => {
    // alert("Apply job");
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(`/user/profile/vacancy/apply/${this.state.jobId}/`,config)
      .then((res) => {
        console.log(res);
        this.setState({ isApplied: true });
      })
      .catch((err) => {
        console.log(err);
      });
    // this.setState({ isApplied: true });
  };

  withdraw = () => {
    // alert("Withdraw job");
    // this.setState({ isApplied: false });
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`/user/profile/vacancy/apply/${this.state.jobId}/`,config)
      .then((res) => {
        console.log(res);
        this.setState({ isApplied: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }

    if(this.state.myPostedJob){
      return <Redirect to={`/postedJob/${this.state.jobId}`}/>
    }

    let companyImgSrc = null;
    if (this.state.jobData) {
      companyImgSrc = this.state.jobData.file_linked;
    }
    if (companyImgSrc === null || companyImgSrc === '') {
      companyImgSrc = defaultCompImg;
    }

    // let payData = (
    //   <div className="payUnavailable">
    //     <h6>Pay range unavailable</h6>
    //     <h5>
    //       <i>Salary information is not available at the moment.</i>
    //     </h5>
    //   </div>
    // );
    // if (this.state.jobData.payRange) {
    //   payData = (
    //     <div className="jobDiv" style={{ marginTop: "14px" }}>
    //       <h6 className="head">Pay Range</h6>
    //       <h6 className="sub">{this.state.jobData.payRange}</h6>
    //     </div>
    //   );
    // }
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
          <h6 className="head" style={{ marginBottom: "4px" }}>
            Pay Range
          </h6>
          <h6 className="sub">{this.state.jobData.pay_range}</h6>
        </div>
      );
    }

    let saveButton = <h6 onClick={this.save}>Save</h6>;
    if (this.state.isSaved) {
      saveButton = (
        <h6
          onClick={this.unSave}
          style={{ backgroundColor: "rgb(82, 82, 255)", color: "white" }}
        >
          Unsave
        </h6>
      );
    }
    let applyButton = <h6 onClick={this.apply}>Apply</h6>;
    if (this.state.isApplied) {
      applyButton = (
        <h6
          onClick={this.withdraw}
          style={{ backgroundColor: "rgb(82, 82, 255)", color: "white" }}
        >
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

    let displayData = <h6>Loading</h6>;
    if (this.state.jobData) {
      displayData = (
        <>
          <div className="header">
            <img src={companyImgSrc} />
            <div>
              <h6 className="jobName">{this.state.jobData.title}</h6>
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
                Number of applicants - {this.state.jobData.num_of_applicants}
              </li>
              <li>Employment type - {this.state.jobData.employment_type}</li>
            </ul>
          </div>

          <div className="strike"></div>

          {/* <h6 style={{paddingLeft:'35px'}}>Description</h6> */}
          <h6 className="jobDesc">{this.state.jobData.description}</h6>

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

    if (this.state.jobData === null) {
      displayData = (
        <div style={{ padding: "20px 20px" }}>
          <div style={{ display: "flex" }}>
            <div>
              <Skeleton
                style={{ marginRight: "12px", marginBottom: "20px" }}
                width={100}
                height={100}
              />
            </div>
            <div>
              <Skeleton width={300} height={15} />
              <br />
              <Skeleton width={270} height={13} />
              <br />
              <Skeleton width={230} height={11} />
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
      );
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
            {displayData}
          </div>
        </div>
      </div>
    );
  }
}

export default JobDisplay;
