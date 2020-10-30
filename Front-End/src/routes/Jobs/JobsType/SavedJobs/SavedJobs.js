import React, { Component } from 'react';
import jobImgSrc from '../../../../assets/profileSample.jpg';

const data = [
  {
    imgSrc : jobImgSrc,
    domain : 'Front-End developer',
    companyName : 'Amazon Inc',
    location : 'Noida' 
  },
  {
    imgSrc : jobImgSrc,
    domain : 'Mobile App Developer',
    companyName : 'Zomato',
    location : 'Gurgaon' 
  },
  {
    imgSrc : jobImgSrc,
    domain : 'Front-End developer',
    companyName : 'Amazon Inc',
    location : 'Mumbai' 
  },
  {
    imgSrc : jobImgSrc,
    domain : 'UI/UX Developer',
    companyName : 'Flingo Inc',
    location : 'Gurgaon' 
  },
]

class SavedJobs extends Component {

  state = {
    jobs : data,
    isEmpty : null,
  }

  unSaveJob = (id) => {
    console.log(this.state.jobs);
    let newSavedJobsArray = this.state.jobs;
    console.log(newSavedJobsArray);
    newSavedJobsArray.splice(id,1);
    this.setState({jobs : newSavedJobsArray});
    // console.log(this.state.jobs);
  } 

  componentDidMount(){
    console.log('From didMount :');
    console.log(this.state.jobs);
  }

  render() {

    let savedJobsData = (
      this.state.jobs.map((item,index)=>{
        let id = index;
        return (
          <div className='savedJob'>
            <div className='savedJobFirst'>
              <img src={item.imgSrc}/>
            </div>
            <div className='savedJobSecond'>
              <h6 className='savedJobDomain'>{item.domain}</h6>
              <h6 className='savedJobCompany'>{item.companyName}</h6>
              <h6 className='savedJobLocation'>{item.location}</h6>
            </div>
            <div className='savedJobThird'>
              <i onClick={() => this.unSaveJob(id)} class="fas fa-trash-alt"></i>
            </div>
          </div>
        )
      })
    )

    return (
      <div className="jobsDisplay">
        <h6 className='savedJobsHeader'>Saved Jobs</h6>
        <div className='savedJobsDisplay'>
          {savedJobsData}
        </div>
      </div>
    );
  }
}

export default SavedJobs;