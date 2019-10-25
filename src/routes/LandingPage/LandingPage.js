import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Image from '../../images/favicon.png';


export default class LandingPage extends Component {
  

  render() {
    return (
        <div className="LandingPageContainer">
            <img src={Image} alt="logo"/>
            <h1>
              Welcome to PackRat!
            </h1>< br/>
            <p className="landingPageInto">Create Collections to catalog all of the things you love!< br/>
              Register a new account and start by creating a Collection.< br/>
              You can Add/Edit/Update/ or Delete Items and Collections.< br/>
              Happy Collecting!< br/>
            </p>< br/>
            <p>
              <Link className="LandingPageLink" to="/login">Login</Link> or <Link className="LandingPageLink" to="/register">Register</Link> to Start collecting now!
            </p>
            <p className="CreatedBy">|| PackRat App Created by <span className="Brockb">Brock Boutwell</span> ||</p>
        </div>
      
    );
  }
}
