import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultCompSrc from "../../../../assets/defaultInstitute.png";

class SavedJob extends Component {
  state = {
    isDeleted: false,
    data: this.props.data,
  };

  unSaveJob = () => {
    this.setState({ isDeleted: null });
    setTimeout(() => {
      this.props.unSaveJob(this.props.data.vacancy_id, this.props.index);
      this.setState({ isDeleted: false });
    }, 2000);
  };

  render() {
    let imgSrc = this.props.data.file_linked;
    if (imgSrc === null) {
      imgSrc = defaultCompSrc;
    }

    if (this.state.isDeleted === null) {
      return (
        <div className="savedJob">
          <NavLink to={`/job/${this.props.data.vacancy_id}`}>
            <div className="savedJobFirst">
              <img src={imgSrc} />
            </div>
            <div className="savedJobSecond">
              <h6 className="savedJobDomain">
                {this.props.data.title} will be removed
              </h6>
            </div>
          </NavLink>
        </div>
      );
    }

    return (
      <div className="savedJob">
        <NavLink to={`/job/${this.props.data.vacancy_id}`}>
          <div className="savedJobFirst">
            <img src={imgSrc} />
          </div>
          <div className="savedJobSecond">
            <h6 className="savedJobDomain">{this.props.data.title}</h6>
            <h6 className="savedJobCompany">{this.props.data.organization}</h6>
            <h6 className="savedJobLocation">{this.props.data.location}</h6>
          </div>
        </NavLink>
        <div className="savedJobThird">
          <i onClick={this.unSaveJob} class="fas fa-trash-alt"></i>
        </div>
      </div>
    );
  }
}

export default SavedJob;
