import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Navbar.css';

class SearchBar extends Component {
  state = {
    term: null,
    submit : null,
  }

  onInputChange = (event) =>{
    this.setState({term : event.target.value});
  }

  onFormSubmit = (event) =>{
    event.preventDefault();
    this.setState({submit: true});
    // alert(this.state.term);
    // this.props.search(this.state.term);
  };

  render() {

    if(this.state.submit){
      this.setState({submit : null});
      return <Redirect to={`/search/${this.state.term}`}/>
    }

    return (
      <form className='barbox' onSubmit={this.onFormSubmit}>
        <i className="fas fa-search"></i>
        <input 
          className='input_bar'
          type='text'
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder='Search for products, brands & more'
        />
      </form>
    );
  }
}

export default SearchBar;