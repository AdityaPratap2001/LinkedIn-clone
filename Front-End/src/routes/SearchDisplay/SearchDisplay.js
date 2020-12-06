import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import defaultUserPic from "../../assets/defaultProfilePic.png";
import defaultCompPic from "../../assets/defaultInstitute.png";
import { NavLink } from "react-router-dom";
import "./SearchDisplay.css";
import axios from "../../API/baseURL/baseURL";
import Skeleton from "react-loading-skeleton";

// let compData = [
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
//   {
//     img: null,
//     isBookmarked: true,
//     title: "Senior Software Engineer",
//     company: "Microsoft Inc.",
//     location: "Noida, Uttar Pradesh, India",
//     timeText: "2 months ago",
//     numOfApplicants: 6,
//     jobId: 12,
//   },
// ];

// let userData = [
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
//   {
//     img: null,
//     name: "Aditya Pratap Singh",
//     tagline: "Web Developer at Software Incubator (SDC-SI)",
//     profileId: 2,
//   },
// ];

class SearchDisplay extends Component {
  state = {
    query: this.props.match.params.id,
    userData: null,
    jobsData: null,
    isLoading1: true,
    isLoading2: true,
    // isLoading: true,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`/user/profile/search/?search=${this.state.query}`, config)
      .then((res) => {
        console.log(res);
        this.setState({ jobsData: res.data, isLoading1: false });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/user/?search=${this.state.query}`, config)
      .then((res) => {
        console.log(res);
        this.setState({ userData: res.data, isLoading2: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let userSearchDisplay = null;
    if (this.state.userData && this.state.userData.length !== 0) {
      userSearchDisplay = this.state.userData.map((user, index) => {
        let imgSrc = user.avatar;
        if (imgSrc === null) {
          imgSrc = defaultUserPic;
        }
        return (
          <div className="searchUserResult">
            <div className="coverImg"></div>

            <img className="profilePic" src={imgSrc} />

            <NavLink to={`/user/${user.profile_id}`}>
              <h6 className="name">{user.name}</h6>
              <h6 className="tag">{user.tagline}</h6>
            </NavLink>

            <NavLink className="connectButton" to={`/user/${user.profile_id}`}>
              Connect
            </NavLink>
          </div>
        );
      });
    }

    let jobSearchDisplay = null;
    if (this.state.jobsData && this.state.jobsData.length !== 0) {
      jobSearchDisplay = this.state.jobsData.map((job, index) => {
        let imgSrc = job.file_linked;
        if (imgSrc === null) {
          imgSrc = defaultCompPic;
        }
        return (
          <div className="recommendedJob">
            <div className="header">
              <NavLink to={`/job/${job.vacancy_id}`}>
                <img src={imgSrc} />
              </NavLink>
            </div>

            <NavLink to={`/job/${job.vacancy_id}`}>
              <div className="description">
                <h6 className="title">{job.title}</h6>
                <h6 className="company">{job.organization}</h6>
                <h6 className="location">{job.location}</h6>
              </div>
              <div className="footer">
                <h6 className="time">{job.posted_at}</h6>
                <h6 className="applicants">
                  {job.num_of_applicants} applicants
                </h6>
              </div>
            </NavLink>
          </div>
        );
      });
    }

    let displayAllData = (
      <div className="searchResults">
        {userSearchDisplay}
        {jobSearchDisplay}
      </div>
    );
    if (userSearchDisplay === null && jobSearchDisplay === null) {
      displayAllData = (
        <h6 style={{color:'grey',textAlign:'center',fontWeight:'400',marginTop:'160px'}}>
          <i>We couldn't find anything!</i><br/>
          <i>Dang! but don't you worry, we are improving every day</i>
        </h6>
      );
    }
    if (this.state.isLoading1 || this.state.isLoading2) {
      displayAllData = (
        <div className="searchResults">
          <div className="searchUserResult">
            <div className="coverImg"></div>
            <Skeleton
              style={{ transform: "scale(1.4) translateY(-35%)" }}
              circle={true}
              width={50}
              height={50}
            />
            <h6 className="name">
              <Skeleton width={180} height={13} />
            </h6>
            <h6 className="tag">
              <Skeleton width={105} height={11} />
            </h6>
            <Skeleton style={{ marginTop: "100px" }} width={110} height={13} />
          </div>
          <div className="searchUserResult">
            <div className="coverImg"></div>
            <Skeleton
              style={{ transform: "scale(1.4) translateY(-35%)" }}
              circle={true}
              width={50}
              height={50}
            />
            <h6 className="name">
              <Skeleton width={180} height={13} />
            </h6>
            <h6 className="tag">
              <Skeleton width={105} height={11} />
            </h6>
            <Skeleton style={{ marginTop: "100px" }} width={110} height={13} />
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
        </div>
      );
    }

    return (
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody searchBody">
          <h5 className="searchHead">Results based on your search</h5>

          {displayAllData}
        </div>
      </div>
    );
  }
}

export default SearchDisplay;
