import React, { Component } from "react";
import UserSuggestion from "./UserSuggestion/UserSuggestion";
import "./SuggestedUsers.css";
import profilePic from "../../../../assets/profileSample.jpg";
import Skeleton from "react-loading-skeleton";

const suggestedData = [
  {
    profilePic: null,
    firstName: "Aditya",
    lastName: "Pratap Singh",
    position: "React Developer",
    industry: "Software Incubator (SDC-SI) sdcfda ysuyydu uyysuy",
  },
  {
    profilePic: profilePic,
    firstName: "Phoebe",
    lastName: "Buffay",
    position: "Node Developer",
    industry: "Team Connactus",
  },
  {
    profilePic: null,
    firstName: "Ross",
    lastName: "Geller",
    position: "React Developer",
    industry: "Software Incubator",
  },
  {
    profilePic: null,
    firstName: "Phoebe",
    lastName: "Buffay",
    position: "Node Developer",
    industry: "Team Connactus",
  },
  {
    profilePic: null,
    firstName: "Ross",
    lastName: "Geller",
    position: "React Developer",
    industry: "Software Incubator",
  },
  {
    profilePic: null,
    firstName: "Phoebe",
    lastName: "Buffay",
    position: "Node Developer",
    industry: "Team Connactus",
  },
  {
    profilePic: null,
    firstName: "Ross",
    lastName: "Geller",
    position: "React Developer",
    industry: "Software Incubator",
  },
  {
    profilePic: null,
    firstName: "Phoebe",
    lastName: "Buffay",
    position: "Node Developer",
    industry: "Team Connactus",
  },
  {
    profilePic: null,
    firstName: "Ross",
    lastName: "Geller",
    position: "React Developer",
    industry: "Software Incubator",
  },
  {
    profilePic: null,
    firstName: "Phoebe",
    lastName: "Buffay",
    position: "Node Developer",
    industry: "Team Connactus",
  },
];

class SuggestedUsers extends Component {
  state = {
    suggestions: suggestedData,
    displaySuggestions: suggestedData.slice(0, 5),
    showingAllUsers: false,
    isLoading: true,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2700)
  }

  showMore = () => {
    this.setState({
      displaySuggestions: this.state.suggestions,
      showingAllUsers: true,
    });
  };
  showLess = () => {
    this.setState({
      displaySuggestions: this.state.suggestions.slice(0, 5),
      showingAllUsers: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <h6 className="heading">
            <Skeleton width="100%" height={23} />
          </h6>
          <div className="user" style={{border:'none'}}>
            <div className="userPic">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "10px" }}
                height={50}
                width={50}
              />
            </div>
            <div className="userDesc" style={{ paddingBottom: "8.6px" }}>
              <h6 className="userDescTop">
                <Skeleton width={120} height={14} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
            </div>
          </div>
          <div className="user" style={{border:'none'}}>
            <div className="userPic">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "10px" }}
                height={50}
                width={50}
              />
            </div>
            <div className="userDesc" style={{ paddingBottom: "8.6px"}}>
              <h6 className="userDescTop">
                <Skeleton width={120} height={14} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
            </div>
          </div>
          <div className="user" style={{border:'none'}}>
            <div className="userPic">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "10px" }}
                height={50}
                width={50}
              />
            </div>
            <div className="userDesc" style={{ paddingBottom: "8.6px" }}>
              <h6 className="userDescTop">
                <Skeleton width={120} height={14} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
            </div>
          </div>
          <div className="user" style={{border:'none'}}>
            <div className="userPic">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "10px" }}
                height={50}
                width={50}
              />
            </div>
            <div className="userDesc" style={{ paddingBottom: "8.6px" }}>
              <h6 className="userDescTop">
                <Skeleton width={120} height={14} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
            </div>
          </div>
          <div className="user" style={{border:'none'}}>
            <div className="userPic">
              <Skeleton
                style={{ transform: "translateY(-4px)", marginRight: "10px" }}
                height={50}
                width={50}
              />
            </div>
            <div className="userDesc" style={{ paddingBottom: "8.6px" }}>
              <h6 className="userDescTop">
                <Skeleton width={120} height={14} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
              <h6>
                <Skeleton height={9} />
              </h6>
            </div>
          </div>
        </>
      );
    }

    let conditionalButton = null;
    if (this.state.suggestions.length > 5) {
      if (!this.state.showingAllUsers) {
        conditionalButton = (
          <h6 onClick={this.showMore} className="showMore">
            Show More
          </h6>
        );
      }
      if (this.state.showingAllUsers) {
        conditionalButton = (
          <h6 onClick={this.showLess} className="showMore">
            Show Less
          </h6>
        );
      }
    }

    let suggestedData = null;
    if (this.state.suggestions) {
      suggestedData = this.state.displaySuggestions.map((elem, id) => {
        return <UserSuggestion data={elem} />;
      });
    }

    return (
      <>
        <h6 className="heading">Suggested Profiles</h6>
        {suggestedData}
        {conditionalButton}
      </>
    );
  }
}

export default SuggestedUsers;
