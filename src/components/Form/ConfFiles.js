import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ConfFiles extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>ConfForm</h1>
        </header>
        <nav>
          <ul id="nav">
            <li><Link to="/form">Locales</Link></li>
            <li><Link to="/form">File Type</Link></li>
            <li><Link to="/form">Resource File Extensions</Link></li>
            <li className="active">Files Being Configured</li>
          </ul>
        </nav>
        <div className="formContainer">
          <h2 id="configured">Files Being Configured</h2>
        </div>
      </div>
    )
  }
}
