import React, { Component } from "react";
import jobImgSrc from "../../../../assets/profileSample.jpg";
import emptySrc from '../../../../assets/empty.png';
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const data = [
  {
    imgSrc: jobImgSrc,
    domain: "Front-End developer",
    companyName: "Amazon Inc",
    location: "Noida",
  },
  {
    imgSrc: jobImgSrc,
    domain: "Mobile App Developer",
    companyName: "Zomato",
    location: "Gurgaon",
  },
  {
    imgSrc: jobImgSrc,
    domain: "Front-End developer",
    companyName: "Amazon Inc",
    location: "Mumbai",
  },
  {
    imgSrc: jobImgSrc,
    domain: "UI/UX Developer",
    companyName: "Flingo Inc",
    location: "Gurgaon",
  },
];
// const data = [];

class SavedJobs extends Component {
  state = {
    jobs: data,
    isEmpty: null,
    isLoading: true,
  };

  unSaveJob = (id) => {
    console.log(this.state.jobs);
    let newSavedJobsArray = this.state.jobs;
    console.log(newSavedJobsArray);
    newSavedJobsArray.splice(id, 1);
    this.setState({ jobs: newSavedJobsArray });
    // console.log(this.state.jobs);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

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

    if (!this.state.isLoading) {
      savedJobsData = this.state.jobs.map((item, index) => {
        let id = index;
        return (
          <div className="savedJob">
            <NavLink to="/job/43">
              <div className="savedJobFirst">
                <img src={item.imgSrc} />
              </div>
              <div className="savedJobSecond">
                <h6 className="savedJobDomain">{item.domain}</h6>
                <h6 className="savedJobCompany">{item.companyName}</h6>
                <h6 className="savedJobLocation">{item.location}</h6>
              </div>
            </NavLink>
            <div className="savedJobThird">
              <i
                onClick={() => this.unSaveJob(id)}
                class="fas fa-trash-alt"
              ></i>
            </div>
          </div>
        );
      });
    }

    if(this.state.jobs.length === 0){
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
