import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import './SearchDisplay.css';

class SearchDisplay extends Component {
  state = {
    query: this.props.match.params.id,
  };

  render() {
    return (
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody searchBody">
          <h5 className='searchHead'>Results based on your search</h5>
        </div>
      </div>
    );
  }
}

export default SearchDisplay;
