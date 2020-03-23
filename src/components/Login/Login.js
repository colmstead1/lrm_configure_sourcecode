import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCs_ZI2UFsMF6SWxVttFLiYSQy-I33dhVk",
  authDomain: "lrm-configure.firebaseapp.com",
  databaseURL: "https://lrm-configure.firebaseio.com",
  projectId: "lrm-configure",
  storageBucket: "lrm-configure.appspot.com",
  messagingSenderId: "1012616149845",
  appId: "1:1012616149845:web:763ecce6a35c4f784a0ddc",
  measurementId: "G-0H86WV9FTX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  };

  signIn(){
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(this.state.redirect);
      this.setState({redirect: true});
      console.log(this.state.redirect);
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      let token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      let user = result.user;
      console.log(user);
      let userImage = document.querySelector("#user-image");
      // appending the user profile image
      console.log("check1");
      let userPic = document.createElement("img");
      userPic.src = user.photoURL;
      userImage.append(userPic);
      console.log("check2");
      // appending the user email address
      let userEmail = document.querySelector("#user-email");
      userEmail.innerHTML = user.email;
      console.log("before");
      this.setState({redirect: true});
      console.log("after");


    }).catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
  };
//sign out
  signOut(){
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("sign out successful");
    }).catch(function (error) {
      // An error happened.
      console.log("sign out NOT successful");
    });
  };


  render() {
    // if logged out you're directed here onload
      return (
        <div id="login-page" className="container">
          <div id="signUp" className="vertContainer">
            <div>
              <h3>New Here?</h3>
              <p>Make a Git Hub Account to test your repos!</p>
            </div>
            <a target="_blank" href="https://github.com/join?source=header-home"><button className="login-page-button">Sign Up</button></a>
          </div>
          <div id="logIn" className="vertContainer">
            <h2>Access Your GitHub Projects</h2>
            <button className="login-button login-page-button" onClick={this.signIn}>New Log In</button>
            <button className="logout-button login-page-button" onClick={this.signOut}>New Log Out</button>
            <aside><a href="https://github.com/password_reset" target="_blank">Forgot your password?</a></aside>
          </div>
          {this.renderRedirect()}
        </div>
      );
    }
}
/*
<Link to="/"><input id="login-button" onClick={this.logIn} value="Log In" type="submit" className="login-page-button"/></Link>

              <input className="login-page-button" onClick={this.isLoggedOut} value="Click to Log Out" type="submit"/>
* <a id="githubButton" href="https://github.com/login/oauth/authorize?client_id=629e93dcd67398b8f56a">Sign in with Github</a><br />
* */
