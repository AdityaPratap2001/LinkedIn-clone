import React, { Component } from "react";
import userImgSrc from "../../../../assets/profileSample.jpg";
import emptySrc from '../../../../assets/empty.png';
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

class Connections extends Component {
  state = {
    loading: true,
    connections : data,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading:false});
    },2000)
  }

  removeConnection = (id) => {
    console.log(this.state.connections);
    let newConnectionsArray = this.state.connections;
    console.log(newConnectionsArray);
    newConnectionsArray.splice(id, 1);
    this.setState({ connections: newConnectionsArray });
  };

  render() {
    let connectionsData = null;

    if(this.state.loading){
      connectionsData = (
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
      connectionsData = this.state.connections.map((item, index) => {
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
              <h6 onClick={() => this.removeConnection(id)}>Remove</h6>
              <button>Message</button>
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

    if(this.state.connections.length === 0){
      connectionsData = (
        <div className='emptyImgDiv'>
          <img src={emptySrc} className='emptyImg'/>
        </div>
      )
    }

    return (
      <div className="jobsDisplay">
        <h6 className="savedJobsHeader">Connections</h6>
        <div className="savedJobsDisplay">
          {connectionsData}
        </div>
      </div>
    );
  }
}

export default Connections;
