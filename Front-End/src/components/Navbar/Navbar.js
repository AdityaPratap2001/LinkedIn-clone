import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import ConditinalRender from './ConditionalRender/ConditionalRender';
import SearchBar from './SearchBar';
// import logoSrc from '../../assets/logo.png';
import logoSrc from '../../assets/logo9.png'

class Navbar extends Component {
  render() {

    let navStyle = null;
    if(this.props.shadow){
      navStyle = {
        // boxShadow : '0px 3px 9px #c6c6cc',
         boxShadow : '0px 1.4px #c6c6cc',
      }
    }

    return (
      <div className="Navbar navbar navbar-expand-lg navbar-light bg-light" style={navStyle}>
        <div className="navbar-brand">
          <NavLink to='/'>
            {/* <img src={logoSrc} alt='logo'/> */}
            {/* <h5>LOGOOOOOO</h5> */}
            <img className='logo' src={logoSrc}/>
          </NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <div className='SearchContainer'>
            <SearchBar/>
          </div>      
    
          <div className='conditional'>
            <ConditinalRender/>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Navbar;