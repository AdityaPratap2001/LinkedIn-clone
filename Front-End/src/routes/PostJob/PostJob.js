import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostJobForm from "./PostJobForm";
import Loader from "../../components/Loader/Loader";
import CustomAlert from "../../components/CustomAlert/CustomAlert";
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
    fd.append("jobTitle", details.jobTitle);
    fd.append("company", details.company);
    fd.append("location", details.location);
    fd.append("empType", details.emplloymentType);
    fd.append("description", details.description);
    fd.append("skills", details.skillsRequired);
    fd.append("industry", details.industry);
    fd.append("payRange", details.payRange);
    fd.append("compLogo", details.companyLogo);

    console.log(fd);

    this.setState({
      showAlert: true,
      alertColor: "success",
      alertData: "You've successfully posted new job",
    });
    setTimeout(() => {
      this.setState({
        showAlert: false,
      });
    }, 2000);
  };

  render() {

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
