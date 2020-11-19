import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Jobs.css";
import SavedJobs from "./JobsType/SavedJobs/SavedJobs";
import AppliedJobs from "./JobsType/AppliedJobs/AppliedJobs";
import PostedJobs from "./JobsType/PostedJobs/PostedJobs";
import { NavLink,Redirect } from "react-router-dom";
import RecommendedJobs from "./JobsType/RecommendedJobs/RecommendedJobs";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";

class Jobs extends Component {
  state = {
    typeOfJob: 1,
  };

  typeOfJobSelected = (type) => {
    this.setState({ typeOfJob: type });
  };

  render() {

    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }

    let borderStyle = {
      borderBottom: 'black 3px solid',
    }
    let style1 = borderStyle;
    let style2 = null;
    let style3 = null;

    let jobsData = <SavedJobs />;
    if (this.state.typeOfJob === 2) {
      jobsData = <AppliedJobs />;
      style1 = null;
      style2 = borderStyle;
      style3 = null;
    }
    if (this.state.typeOfJob === 3) {
      jobsData = <PostedJobs />;
      style1 = null;
      style2 = null;
      style3 = borderStyle;
    }

    return (
      <div>
        <Navbar shadow={true} />

        <div className="jobsBody">
          <div className='sideBox'>
          <ProfileSidebox isMoving={true}/>
          </div>
          
          <div className='rightDisplay'>
            <div className="jobsTypeSelect">
              <div className="jobsTypeSelectLeft">
                <div style={style1} onClick={() => this.typeOfJobSelected(1)}>
                  <i class="far fa-bookmark"></i>
                  Saved Jobs
                </div>
                <div style={style2} onClick={() => this.typeOfJobSelected(2)}>
                  Applied Jobs
                </div>
                <div style={style3} onClick={() => this.typeOfJobSelected(3)}>Posted Jobs</div>
              </div>
              <div className="jobsTypeSelectRight">
                <NavLink to="/postJob">
                  <button>Post Job</button>
                </NavLink>
              </div>
            </div>

            {jobsData}
          </div>

          <RecommendedJobs />

        </div>
      </div>
    );
  }
}

export default Jobs;
