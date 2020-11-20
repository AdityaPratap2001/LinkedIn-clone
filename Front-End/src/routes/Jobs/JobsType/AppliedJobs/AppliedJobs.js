import React, { Component } from "react";
import emptySrc from "../../../../assets/empty.png";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import axios from "../../../../API/baseURL/baseURL";
import defaultCompImg from '../../../../assets/defaultInstitute.png'

class AppliedJobs extends Component {
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
    axios
      .get("/user/profile/view/vacancy/applied/vacancy/", config)
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          jobs: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let appliedJobsData = null;
    if (this.state.jobs !== null) {
      appliedJobsData = this.state.jobs.map((item, index) => {

        let imgSrc = item.logo;
        if(imgSrc === null){
          imgSrc = defaultCompImg;
        }

        let id = index;
        let statusData = null;

        if (item.has_been_accepted === true) {
          statusData = <h6 className="status acceptedStatus">Accepted</h6>;
        }
        if (item.has_been_accepted === false) {
          statusData = <h6 className="status rejectedStatus">Rejected</h6>;
        }
        if (item.has_been_accepted === null) {
          statusData = <h6 className="status pendingStatus">Pending</h6>;
        }

        return (
          <div className="savedJob">
            <NavLink to={`/job/${item.vacancy_id}`}>
              <div className="savedJobFirst">
                <img src={imgSrc} />
              </div>
              <div className="savedJobSecond">
                <h6 className="savedJobDomain">{item.title}</h6>
                <h6 className="savedJobCompany">{item.organization}</h6>
                <h6 className="savedJobLocation">{item.location}</h6>
              </div>
            </NavLink>
            <div className="savedJobThird">
              {/* <i onClick={() => this.unSaveJob(id)} class="fas fa-trash-alt"></i> */}
              {statusData}
            </div>
          </div>
        );
      });
    }

    if (this.state.isLoading) {
      appliedJobsData = (
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

    if (this.state.jobs && this.state.jobs.length === 0) {
      appliedJobsData = (
        <div className="emptyImgDiv">
          <img src={emptySrc} className="emptyImg" />
        </div>
      );
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Applied Jobs</h6>
        <div className="savedJobsDisplay">{appliedJobsData}</div>
      </div>
    );
  }
}

export default AppliedJobs;
