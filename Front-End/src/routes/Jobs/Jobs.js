import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Jobs.css";
import SavedJobs from "./JobsType/SavedJobs/SavedJobs";
import AppliedJobs from "./JobsType/AppliedJobs";
import PostedJobs from "./JobsType/PostedJobs";
import { NavLink } from "react-router-dom";
import RecommendedJobs from "./JobsType/RecommendedJobs/RecommendedJobs";

class Jobs extends Component {
  state = {
    typeOfJob: 1,
  };

  typeOfJobSelected = (type) => {
    this.setState({ typeOfJob: type });
  };

  render() {
    let jobsData = <SavedJobs />;
    if (this.state.typeOfJob === 2) {
      jobsData = <AppliedJobs />;
    }
    if (this.state.typeOfJob === 3) {
      jobsData = <PostedJobs />;
    }

    return (
      <div>
        <Navbar shadow={true} />
        
        <div className="jobsBody">
          
          <div className="jobsTypeSelect">
            <div className="jobsTypeSelectLeft">
              <div onClick={() => this.typeOfJobSelected(1)}>
                <i class="far fa-bookmark"></i>
                Saved Jobs
              </div>
              <div onClick={() => this.typeOfJobSelected(2)}>Applied Jobs</div>
              <div onClick={() => this.typeOfJobSelected(3)}>Posted Jobs</div>
            </div>
            <div className="jobsTypeSelectRight">
              <NavLink to="/postJob">
                <button>Post Job</button>
              </NavLink>
            </div>
          </div>

          {jobsData}

          <RecommendedJobs/>
          
        </div>
      </div>
    );
  }
}

export default Jobs;
