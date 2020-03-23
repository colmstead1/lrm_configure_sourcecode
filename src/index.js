import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ConfForm from './components/Form/Form';
import ConfFiles from './components/Form/ConfFiles';
import GitHubConnect from './components/GitHub/GitHub';
import Header from './components/Header/Header';
import './App.css';

let repoList = [
  {
    id: 0,
    title: "Globalyzer-ALM-Integration",
    configured: false,
    description: "",
    fileJson: false,
    fileResx: false,
    fileProperties: false,
    confButton: "CONFIGURE"
  },
  {
    id: 1,
    title: "Rebel-Outfitters",
    configured: true,
    description: "A single page Vanilla JS web app to demonstrate Lingoport’s capabilities.",
    fileJson: true,
    fileResx: false,
    fileProperties: false,
    confButton: "EDIT CONFIGURATION"
  },
  {   id: 2,
    title: "Dashboard-sonar-plugin",
    configured: false,
    description: "Lingoport Dashboard SQ plugin",
    fileJson: false,
    fileResx: false,
    fileProperties: false,
    "confButton": "CONFIGURE"
  },
  {
    id: 3,
    title: "sonarcube",
    configured: false,
    description: "Continuous Inspection",
    fileJson: false,
    fileResx: false,
    fileProperties: false,
    confButton: "CONFIGURE"
  },
  {
    id: 4,
    title: "gyzr-client",
    configured: true,
    description: "Globalyzer Client",
    fileJson: true,
    fileResx: true,
    fileProperties: true,
    confButton: "EDIT CONFIGURATION"
  }
];

let sourceLocaleList = [
  {id: 1, MT: "en", repo: "en_US"},
  {id: 2, MT: "fr", repo: "fr_FR"},
  {id: 3, MT: "fr", repo: "fr_CA"},
  {id: 4, MT: "es", repo: "es_MX"},
  {id: 5, MT: "de", repo: "de_DE"},
  {id: 6, MT: "hi", repo: "hi_IN"},
  {id: 7, MT: "zh", repo: "zh_CH"},
];

let targetLocaleList = [
  {id: 1, MT: "en", repo: "en_US"},
  {id: 2, MT: "fr", repo: "fr_FR"},
  {id: 3, MT: "fr", repo: "fr_CA"},
  {id: 4, MT: "es", repo: "es_MX"},
  {id: 5, MT: "de", repo: "de_DE"},
  {id: 6, MT: "hi", repo: "hi_IN"},
  {id: 7, MT: "zh", repo: "zh_CH"},
];

let filePatternList = [
  {id: 1, source: "language_country.json", sourceEx: "ex: en_US.json", locale: "language.json", localeEx: "ex: en.json"},
  {id: 2, source: "file_language_country.json", sourceEx: "ex: resources_en_US.json", locale: "file.language.json", localeEx: "ex: resources.en.json"},
  {id: 3, source: "file_language_country.json", sourceEx: "ex: resources_en_US.json", locale: "file_language.json", localeEx: "ex: resources_en.json"},
  {id: 4, source:  "file.language_country.json", sourceEx: "ex: resources.en_US.json", locale: "file.language.json", localeEx: "ex: resources.en.json"},
  {id: 5, source: "file.language_country.json", sourceEx: "ex: resources.en_US.json", locale: "file_language.json", localeEx: "ex: resources_en.json"},
  {id: 6, source: "file.language.country.json", sourceEx: "ex: resources.en.US.json", locale: "file.language.json", localeEx: "ex: resources.en.json"},
  {id: 7, source: "file.language.country.json", sourceEx: "ex: resources.en.US.json", locale: "file_language.json", localeEx: "ex: resources_en.json"},
];

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/lrm_configure/login">
          <div>
            <Header/>
            <Login/>
          </div>
        </Route>
        <Route exact path="/lrm_configure/">
          <div>
            <Header/>
            <div id="repo-page">
              <GitHubConnect />
              <Home repos={repoList}/>
            </div>
          </div>
        </Route>
        <Route path="/lrm_configure/form">
          <div>
            <Header/>
            <ConfForm slList={sourceLocaleList} tlList={targetLocaleList} eList={filePatternList} repos={repoList}/>
          </div>
        </Route>
        <Route exact path="/lrm_configure/confFiles">
          <ConfFiles />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
