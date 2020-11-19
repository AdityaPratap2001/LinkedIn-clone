import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import defaultCompanyLogo from "../../../../assets/defaultInstitute.png";

class RecommendedJob extends Component {

  state = {
    isBookmarked : this.props.job.isBookmarked,
  }

  componentDidMount(){
    // console.log(this.props.job);
  }

  bookMark = () => {
    alert('bookmarked a job!');
  }

  unbookMark = () => {
    alert('unBookmark a job!');
  }

  render() {
    
    let jobImgSrc = this.props.job.img;
    if(jobImgSrc === null){
      jobImgSrc = defaultCompanyLogo;
    }

    let bookmarkIcon = <i class="far fa-bookmark"></i>;
    if(this.state.isBookmarked){
      bookmarkIcon = <i class="fas fa-bookmark"></i>;
    }

    return (
      <div className="recommendedJob">
        <div className="header">
          <NavLink to={`/job/${this.props.job.jobId}`}>
            <img src={jobImgSrc}/>
          </NavLink>

          {bookmarkIcon}
        </div>
        <NavLink to={`/job/${this.props.job.jobId}`}>
          <div className="description">
            <h6 className="title">{this.props.job.title}</h6>
            <h6 className="company">{this.props.job.company}</h6>
            <h6 className="location">{this.props.job.location}</h6>
          </div>
          <div className="footer">
            <h6 className="time">{this.props.job.timeText}</h6>
            <h6 className="applicants">{this.props.job.numOfApplicants} applicants</h6>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default RecommendedJob;
