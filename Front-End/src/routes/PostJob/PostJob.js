import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostJobForm from "./PostJobForm";
import Loader from "../../components/Loader/Loader";
import CustomAlert from "../../components/CustomAlert/CustomAlert";
import axios from "../../API/baseURL/baseURL";
import {Redirect} from "react-router-dom";
import "./PostJob.css";

class PostJob extends Component {
  state = {
    isLoading: false,
    alertColor: "success",
    alertData: "You've successfully posted new job",
    showAlert: false,
  };

  hidePop = () => {
    this.setState({ showAlert: false });
  };

  submitForm = (details) => {
    console.log(details);
    let fd = new FormData();
    fd.append("organization", details.company);
    fd.append("title", details.jobTitle);
    fd.append("is_remote", false);
    fd.append("location", details.location);
    fd.append("employment_type", details.employmentType);
    fd.append("description", details.description);
    if (details.companyLogo !== null) {
      fd.append("file_linked", details.companyLogo);
    }
    fd.append("skills_required", details.skillsRequired);
    fd.append("industry", details.industry);
    fd.append("pay_range", details.payRange);

    console.log(fd);

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profID = localStorage.getItem("profileID");

    axios
      .post(`/user/profile/vacancy/`, fd, config)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          this.setState({
            showAlert: true,
            alertColor: "success",
            alertData: "You've successfully posted new job!",
          });
          setTimeout(() => {
            this.setState({
              showAlert: false,
            });
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          showAlert: true,
          alertColor: "danger",
          alertData: "Something went wrong!",
        });
        setTimeout(() => {
          this.setState({
            showAlert: false,
          });
        }, 2000);
      });
  };

  render() {
    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }

    let alertData = null;
    if (this.state.showAlert) {
      alertData = (
        <CustomAlert
          color={this.state.alertColor}
          content={this.state.alertData}
          hidePop={this.hidePop}
        />
      );
    }

    return (
      <div>
        <Navbar />
        {alertData}
        <div className="body postJobsBody">
          <h6 className="postJobHeadLine">Find a great hire, fast</h6>
          <h6 className="postJobSubHeadLine">
            Rated #1 in delivering quality hires
          </h6>

          <PostJobForm submitForm={this.submitForm} />
        </div>
      </div>
    );
  }
}

export default PostJob;
