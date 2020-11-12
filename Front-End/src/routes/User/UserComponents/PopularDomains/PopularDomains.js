import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "./PopularDomains.css";

class PopularDomains extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2500)
  }

  render() {
    if (this.state.isLoading) {
      return (
      <>
        <Skeleton height={30} width='80%' style={{marginBottom:'22px'}}/>
        
        <Skeleton height={16} width='70%'/>
        <Skeleton height={12} width='50%'/>
        <Skeleton height={16} width='70%'/>
        <Skeleton height={12} width='50%'/>
        <Skeleton height={16} width='70%'/>
        <Skeleton height={12} width='50%'/>
        <Skeleton height={16} width='70%'/>
        <Skeleton height={12} width='50%'/>
        <Skeleton height={16} width='70%'/>
        <Skeleton height={12} width='50%'/>
        <Skeleton height={16} width='70%'/>
        <Skeleton height={12} width='50%'/>

      </>
      );
    }

    return (
      <>
        <h6 className="heading">Trending Domains</h6>

        <h6 className="domain">
          <NavLink to="/search/WebDevelopers">#Web-Developers</NavLink>
        </h6>
        <h6 className="domainPeople">38,296 people</h6>

        <h6 className="domain">
          <NavLink to="/search/AppDevelopers">#App-Developers</NavLink>
        </h6>
        <h6 className="domainPeople">21,847 people</h6>

        <h6 className="domain">
          <NavLink to="/search/MachineLearning">#Machine Learning</NavLink>
        </h6>
        <h6 className="domainPeople">13,226 people</h6>

        <h6 className="domain">
          <NavLink to="/search/Designers">#UI/UX Designer</NavLink>
        </h6>
        <h6 className="domainPeople">26,836 people</h6>

        <h6 className="domain">
          <NavLink to="/search/aspnet">#ASP .NET Developers</NavLink>
        </h6>
        <h6 className="domainPeople">14,863 people</h6>

        <h6 className="domain">
          <NavLink to="/search/Unity">#Unity 3D</NavLink>
        </h6>
        <h6 className="domainPeople">7,736 people</h6>
      </>
    );
  }
}

export default PopularDomains;
