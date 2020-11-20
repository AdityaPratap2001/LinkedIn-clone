import React, { Component } from "react";
import jobImgSrc from "../../../../assets/profileSample.jpg";
import emptySrc from '../../../../assets/empty.png';
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import axios from '../../../../API/baseURL/baseURL';
import SavedJob from './SavedJob';

class SavedJobs extends Component {
  state = {
    jobs: null,
    isEmpty: null,
    isLoading: true,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get('/user/profile/vacancy/bookmark/view/',config)
      .then((res)=>{
        console.log(res);
        this.setState({jobs : res.data,isLoading : false});
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  unSaveJob = (jobId,id) => {
    // console.log(this.state.jobs);
    let newSavedJobsArray = this.state.jobs;
    // console.log(newSavedJobsArray);
    newSavedJobsArray.splice(id, 1);
    this.setState({ jobs: newSavedJobsArray });
    // console.log(this.state.jobs);
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.delete(`/user/profile/vacancy/bookmark/${jobId}/`,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  };

  render() {
    let savedJobsData = null;

    if (this.state.isLoading) {
      savedJobsData = (
        <>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
          <div className="savedJob">
            <div className="savedJobFirst">
              <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
            </div>
            <div className="savedJobSecond">
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={220}
                height={12}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
              <br />
              <Skeleton
                style={{ marginLeft: "18px" }}
                width={180}
                height={10}
              />
            </div>
          </div>
        </>
      );
    }

    if (!this.state.isLoading && this.state.jobs.length !== 0) {
      savedJobsData = this.state.jobs.map((item, index) => {
        let id = index;
        return (
          <SavedJob unSaveJob={this.unSaveJob} index={index} data={item}/>
        );
      });
    }

    if(this.state.jobs !== null && this.state.jobs.length === 0){
      savedJobsData = (
        <div className='emptyImgDiv'>
          <img src={emptySrc} className='emptyImg'/>
        </div>
      )
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Saved Jobs</h6>
        <div className="savedJobsDisplay">{savedJobsData}</div>
      </div>
    );
  }
}

export default SavedJobs;
