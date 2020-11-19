import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RecommendedJob from './RecommendedJob';
import defaultCompanyLogo from "../../../../assets/defaultInstitute.png";

let data = [
  {
    img: defaultCompanyLogo, 
    isBookmarked: true,
    title: "Senior Software Engineer",
    company: "Microsoft Inc.",
    location: "Noida, Uttar Pradesh, India",
    timeText: "2 months ago",
    numOfApplicants: 6,
    jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: false,title: "Senior Software Engineer2",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: true,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: false,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: true,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: true,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: false,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: false,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },

  {
    img: defaultCompanyLogo, isBookmarked: true,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  {
    img: defaultCompanyLogo, isBookmarked: true,title: "Senior Software Engineer",company: "Microsoft Inc.",location: "Noida, Uttar Pradesh, India",timeText: "2 months ago",numOfApplicants: 6,jobId: 12
  },
  
];

class RecommendedJobs extends Component {
  state = {
    jobsData: data,
    isLoading: false,
  };

  render() {
    let displayData = null;
    if (!this.state.isLoading) {
      displayData = this.state.jobsData.map((job, index) => {
        // console.log(index);
        // console.log(job);
        return (
          <RecommendedJob job={job}/>
        );
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
