import React, { Component } from 'react';
import userImgSrc from "../../../../assets/profileSample.jpg";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const data = [
  {
    imgSrc: userImgSrc,
    name: "Monica Geller",
    domain: "Chef",
    industry: "Allasandro's",
  },
  {
    imgSrc: userImgSrc,
    name: "Chandler Bing",
    domain: "Sarcastic",
    industry: "Everything",
  },
  {
    imgSrc: userImgSrc,
    name: "Gunther Green",
    domain: "Waiter",
    industry: "Central Perk",
  },
  {
    imgSrc: userImgSrc,
    name: "Phoebe Buffay",
    domain: "Masseuse",
    industry: "Ross' place",
  },
];

class Invitations extends Component {

  state = {
    loading : true,
    invitations : data,
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading:false});
    },2000)
  }

  removeInvitation = (id) => {
    console.log(this.state.invitations);
    let newInvitationsArray = this.state.invitations;
    console.log(newInvitationsArray);
    newInvitationsArray.splice(id, 1);
    this.setState({ invitations: newInvitationsArray });
  }
  
  render() {
    let invitationsData = null;

    if(this.state.loading){
      invitationsData = (
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

    if (!this.state.loading) {
      invitationsData = this.state.invitations.map((item, index) => {
        let id = index;
        let initialData = (
          <>
            <NavLink to="/job/43">
              <div className="connectionFirst">
                <img src={item.imgSrc} />
              </div>
              <div className="connectionSecond">
                <h6 className="connectionName">{item.name}</h6>
                <h6 className="connectionDomain">
                  {item.domain} at {item.industry}
                </h6>
              </div>
            </NavLink>
            <div className="connectionThird">
              <h6 onClick={() => this.removeInvitation(id)}>Delete</h6>
              <button>Accept</button>
            </div>
          </>
        );
        return (
          <div className="connection savedJob">
            {initialData}
            {/* <div className="connectionThird">
              <h6 onClick={() => this.removeConnection(index)}>Remove</h6>
              <button>Message</button>
            </div> */}
          </div>
        );
      });
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Invitations</h6>
        <div className="savedJobsDisplay">
          {invitationsData}
        </div>
      </div>
    );
  }
}

export default Invitations;