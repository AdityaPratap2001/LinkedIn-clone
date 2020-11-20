import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RecommendedJob from "./RecommendedJob";
import defaultCompanyLogo from "../../../../assets/defaultInstitute.png";
import axios from "../../../../API/baseURL/baseURL";
import Skeleton from "react-loading-skeleton";

class RecommendedJobs extends Component {
  state = {
    jobsData: null,
    isLoading: true,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/user/profile/view/recommended/vacancy/", config)
      .then((res) => {
        console.log(res);
        this.setState({jobsData : res.data , isLoading : false});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let displayData = null;

    if (this.state.isLoading) {
      displayData = (
        <>
          <div className="recommendedJob">
            <Skeleton width={72} height={72} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={12} />
            <br />
            <Skeleton width={120} height={11} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={13} />
            <br />
          </div>
          <div className="recommendedJob">
            <Skeleton width={72} height={72} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={12} />
            <br />
            <Skeleton width={120} height={11} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={13} />
            <br />
          </div>
          <div className="recommendedJob">
            <Skeleton width={72} height={72} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={12} />
            <br />
            <Skeleton width={120} height={11} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={13} />
            <br />
          </div>
          <div className="recommendedJob">
            <Skeleton width={72} height={72} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={12} />
            <br />
            <Skeleton width={120} height={11} />
            <br />
            <br />
            <Skeleton width={160} height={13} />
            <br />
            <Skeleton width={140} height={13} />
            <br />
          </div>
        </>
      );
    }

    if (!this.state.isLoading) {
      displayData = this.state.jobsData.map((job, index) => {
        return <RecommendedJob job={job} />;
      });
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Recommended for you</h6>
        <div className="recommendedJobsDisplay">{displayData}</div>
      </div>
    );
  }
}

export default RecommendedJobs;
