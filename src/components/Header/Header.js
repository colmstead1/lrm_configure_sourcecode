import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    // if logged out you're directed here onload
    return (
      <div id="header-div">
        <header className="container">
          <h1>LRM Configure</h1>
          <Link to="/login"><button id="logout-button">Logout</button></Link>
        </header>
      </div>
    );
  }
}
/*<a id="githubButton" href="https://github.com/login/oauth/authorize?client_id=629e93dcd67398b8f56a">Sign in with Github</a>*/
