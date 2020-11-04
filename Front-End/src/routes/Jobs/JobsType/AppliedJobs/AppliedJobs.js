import React, { Component } from "react";
import jobImgSrc from "../../../../assets/profileSample.jpg";
import Skeleton from "react-loading-skeleton";
import {NavLink} from 'react-router-dom';

const data = [
  {
    imgSrc: jobImgSrc,
    domain: "Front-End developer",
    companyName: "Amazon Inc",
    location: "Noida",
    status: 'accepted'
  },
  {
    imgSrc: jobImgSrc,
    domain: "Mobile App Developer",
    companyName: "Zomato",
    location: "Gurgaon",
    status:'pending'
  },
  {
    imgSrc: jobImgSrc,
    domain: "Front-End developer",
    companyName: "Amazon Inc",
    location: "Mumbai",
    status: 'rejected'
  },
  {
    imgSrc: jobImgSrc,
    domain: "UI/UX Developer",
    companyName: "Flingo Inc",
    location: "Gurgaon",
    status: 'rejected'
  },
];

class AppliedJobs extends Component {
  
  state = {
    jobs: data,
    isEmpty: null,
    isLoading: true,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2000)
  }

  render() {
    
    let appliedJobsData = this.state.jobs.map((item,index)=>{
      let id = index;
      let statusData = null;
      
      if(item.status === 'accepted'){
        statusData = (
          <h6 className='status acceptedStatus'>
            Accepted
          </h6>
        )
      }
      if(item.status === 'rejected'){
        statusData = (
          <h6 className='status rejectedStatus'>
            Rejected
          </h6>
        )
      }
      if(item.status === 'pending'){
        statusData = (
          <h6 className='status pendingStatus'>
            Pending
          </h6>
        )
      }

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
            {/* <i onClick={() => this.unSaveJob(id)} class="fas fa-trash-alt"></i> */}
            {statusData}
          </div>
        </div>
      );
    })

    if(this.state.isLoading){
      appliedJobsData = (
        <>
        <div className="savedJob">
          <div className="savedJobFirst">
            <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
          </div>
          <div className="savedJobSecond">
            <Skeleton style={{ marginLeft: "18px" }} width={220} height={12} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
          </div>
        </div>
        <div className="savedJob">
          <div className="savedJobFirst">
            <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
          </div>
          <div className="savedJobSecond">
            <Skeleton style={{ marginLeft: "18px" }} width={220} height={12} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
          </div>
        </div>
        <div className="savedJob">
          <div className="savedJobFirst">
            <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
          </div>
          <div className="savedJobSecond">
            <Skeleton style={{ marginLeft: "18px" }} width={220} height={12} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
          </div>
        </div>
        <div className="savedJob">
          <div className="savedJobFirst">
            <Skeleton style={{ marginLeft: "10px" }} width={70} height={70} />
          </div>
          <div className="savedJobSecond">
            <Skeleton style={{ marginLeft: "18px" }} width={220} height={12} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
            <br />
            <Skeleton style={{ marginLeft: "18px" }} width={180} height={10} />
          </div>
        </div>
      </>
      )
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Applied Jobs</h6>
        <div className="savedJobsDisplay">
          {appliedJobsData}
        </div>
      </div>
    );
  }
}

export default AppliedJobs;
