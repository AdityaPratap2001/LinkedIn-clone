import React, { Component } from "react";
import jobImgSrc from "../../../../assets/profileSample.jpg";
import emptySrc from "../../../../assets/empty.png";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import axios from "../../../../API/baseURL/baseURL";
import defaultCompPic from "../../../../assets/defaultInstitute.png"

class PostedJobs extends Component {
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
    axios.get('/user/profile/vacancy/',config)
      .then((res)=>{
        console.log(res);
        this.setState({jobs : res.data,isLoading : false});
      })
      .catch((err)=>{
        console.log(err);
      })

  }

  render() {
    let savedJobsData = null;

    // if (this.state.isLoading) {
      if(true){
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

    if (!this.state.isLoading && this.state.jobs) {
      savedJobsData = this.state.jobs.map((item, index) => {
        let id = index;
        let imgSrc = item.file_linked;
        if(imgSrc === null || imgSrc === ''){
          imgSrc = defaultCompPic;
        }
        return (
          <div className="savedJob">
            <NavLink to={`/postedJob/${item.vacancy_id}`}>
              <div className="savedJobFirst">
                <img src={imgSrc} />
              </div>
              <div className="savedJobSecond">
                <h6 className="savedJobDomain">{item.title}</h6>
                <h6 className="savedJobCompany">{item.organization}</h6>
                <h6 className="savedJobLocation">{item.location}</h6>
              </div>
            </NavLink>
            {/* <div className="savedJobThird">
              <i
                onClick={() => this.unSaveJob(id)}
                class="fas fa-trash-alt"
              ></i>
            </div> */}
          </div>
        );
      });
    }

    if (this.state.jobs !== null && this.state.jobs.length === 0) {
      savedJobsData = (
        <div className="emptyImgDiv">
          <img src={emptySrc} className="emptyImg" />
        </div>
      );
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Posted Jobs</h6>
        <div className="savedJobsDisplay">{savedJobsData}</div>
      </div>
    );
  }
}

export default PostedJobs;
