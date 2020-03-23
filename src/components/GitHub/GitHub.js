import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Login from "../Login/Login";
import * as firebase from "firebase";

const inputUsername = "viol5229";
console.log("input username "+ inputUsername);
let userURL = 'https://api.github.com/users/' + inputUsername;


export default class GitHubConnect extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      repos: "",
    };
  }

  componentDidMount() {
    fetch(userURL)
      .then(response => response.json())
      .then(
        user => {
          this.setState({
            user: user
          });
        }
      );
    fetch(userURL + "/repos")
      .then(response => response.json())
      .then(
        repos => {
          this.setState({
            repos: repos
          });
        }
      );
  }
  /*
  This method is used as a mapping function. Eventually this could be factored out to its own component.
  */
  renderStat(stat) {
    return (
      <div key={stat.name}>
          <p>{stat.name}: {stat.value}</p>
      </div>
    );
  }

  render() {
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Render a LOADING indicator.
    if (!this.state.user) {
      return (<div className="user-page">LOADING...</div>);
    }

    // If we get to this part of `render`, then the user is loaded
    const user = this.state.user;
    //const repos = this.state.repos;
    //console.log(repos);

    // Gather up some number stats about the user, to be used in a map below
    const repoList = [
      {
        name: 'Followers',
        value: user.followers,
        url: `/user/`+inputUsername+`/followers`
      },
      {
        name: 'Following',
        value: user.following,
        url: `/user/`+inputUsername+`/following`
      }
    ];

    // Look in index.css for the styles that make this look like it does
    return (
      <div className="user-page">
        <div className="user-info">
          <Link to={`/user/${user.login}`}>
            <img width="50%" src={user.avatar_url} alt={`${user.login} avatar`}/>
            <h2>{user.name}</h2>
            <h3>{user.login}</h3>
            <p>{user.bio}</p>
          </Link>

          <article className="user-info__stats">
            {repoList.map(this.renderStat)}
          </article>
        </div>
      </div>
    );
  }
}
