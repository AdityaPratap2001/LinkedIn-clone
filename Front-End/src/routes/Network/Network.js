import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';
import Invitations from './NetworkType/Invitations/Invitations';
import Connections from './NetworkType/Connections/Connections';
import './Network.css';

class Network extends Component {

  state = {
    typeOfJob: 2,
  };

  typeOfJobSelected = (type) => {
    this.setState({ typeOfJob: type });
  };

  render() {

    let borderStyle = {
      borderBottom: 'black 3px solid',
    }
    let style1 = borderStyle;
    let style2 = null;

    let jobsData = <Invitations/>;
    if (this.state.typeOfJob === 2) {
      jobsData = <Connections/>;
      style1 = null;
      style2 = borderStyle;
    }
  
    return (
      <div>
        <Navbar shadow={true} />

        <div className="jobsBody">
          <div className='sideBox'>
          <ProfileSidebox />
          </div>
          
          <div className='rightDisplay'>
            <div className="jobsTypeSelect">
              <div className="jobsTypeSelectLeft networkHeader">
                <div style={style1} onClick={() => this.typeOfJobSelected(1)}>
                  Invitations
                </div>
                <div style={style2} onClick={() => this.typeOfJobSelected(2)}>
                  Connections
                </div>
              </div>
              {/* <div className="jobsTypeSelectRight">
                <NavLink to="/postJob">
                  <button>Post Job</button>
                </NavLink>
              </div> */}
            </div>

            {jobsData}

          </div>

        </div>
      </div>
    );
  }
}

export default Network;