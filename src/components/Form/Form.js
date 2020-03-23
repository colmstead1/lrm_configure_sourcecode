import React, { Component } from 'react';
import {Link} from "react-router-dom";

const SourceLocaleList = ({id, MT, repo}) =>{
  return(
    <option value={id}>{MT} / {repo}</option>
  )
};
const TargetLocaleList = ({MT, repo, call}) =>{
  return(
    <label>
      <input
        value={repo}
        type="checkbox"
        name="tls"
        onClick={call}
      />
      {MT} / {repo}
      <br/>
    </label>
  )
};

const PatternList = ({id, source, sourceEx, locale, localeEx}) =>{
  return(
    <option value={id}>{source} / {locale} / {sourceEx} / {localeEx}</option>
  )
};
const save = () => {
  console.log("made it");
};

export default class ConfForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      sl: this.state,
      tl: [],
      ft: [],
      extension: this.state,
    };
    this.newTL = this.newTL.bind(this);
    this.newFT = this.newFT.bind(this);
  }

  newSL = e => {
    this.setState({sl: e.target.value})
  };
  newTL = e => {
    this.setState({
      tl: [ ...this.state.tl, e.target.value]
    })
  };
  newFT = e => {
    if(e.target.checked) {
      this.setState({
        ft: [ ...this.state.ft, e.target.value],
      });
    }
  };
  newExtension = e => {
    this.setState({extension: e.target.value})
  };
  submit = e => {
    console.log((this.state));
    e.preventDefault()
  };

  render(){
    const { /*repos,*/ slList, tlList, eList} = this.props;
    /*console.log(repos);*/
    return(
      <div>
        <nav>
          <ul id="nav">
            <li id="localesNav" className="active"><a href="#locales">Locales</a></li>
            <li id="fileTypeNav" className=""><a href="#fileType">File Type</a></li>
            <li id="extensionsNav" className=""><a href="#extensions">Resource File Extensions</a></li>
            <li id="confFilesNav" className=""><Link to="/confFiles">Files Being Configured</Link></li>
          </ul>
        </nav>
        <form className="formContainer" onSubmit={this.submit}>
          <div>
            <div className="formSection">
              <h2 id="locales">Locales</h2>
              <h3 className="tab">Source Locales</h3>
              <div className="tab">
                <select className="dropdown tab" defaultValue={'DEFAULT'} onChange={this.newSL}>
                  <option value="DEFAULT" disabled hidden>Select a source locale...	</option>
                  <option value="Machine Translation     Repo" disabled>Machine Translation     Repo</option>
                  {slList.map(
                    (sourceList, i) =>
                      <SourceLocaleList
                        key={i}
                        id={sourceList.id}
                        MT={sourceList.MT}
                        repo={sourceList.repo}
                      />
                  )}
                </select><br /><br/>
              </div>
              <h3 className="tab">Target Locales</h3>
              <div className="tab">
                <div id="grid" className="tab">
                  <ul id="headers">
                    <li>Machine Translation</li>
                    <li>Repository</li>
                  </ul>

                  <div className="tab">
                    {tlList.map(
                      (targetList, i) =>
                        <TargetLocaleList
                          key={i}
                          MT={targetList.MT}
                          repo={targetList.repo}
                          call={this.newTL}
                        />
                    )}
                  </div>
                </div><br />
              </div>
            </div>
            <div className="formSection">
              <h2 id="fileType">File Type</h2>
              <h3 className="tab">Which file type(s)?</h3>
              <div className="tab">
                <div className="tab">
                  <label>
                    <input
                      type="checkbox"
                      name="fileTypes"
                      value=".json"
                      onClick={this.newFT}
                    />
                    .json
                  </label><br/>
                  <label>
                    <input
                      type="checkbox"
                      name="fileTypes"
                      value=".resx"
                      onClick={this.newFT}
                    />
                    .resx
                  </label><br/>
                  <label>
                    <input
                      type="checkbox"
                      name="fileTypes"
                      value=".properties"
                      onClick={this.newFT}
                    />
                    .properties
                  </label>
                </div>
              </div>
            </div>
            <div className="formSection">
              <h2 id="extensions">Resource File Extensions</h2>
              <div id="json" className="tab">
                <h3>.json</h3>
                <h4 className="tab">Extension File Pattern</h4>
                <div className="tab">
                  <div id="grid" className="tab">
                    <ul id="headers">
                      <li>Source</li>
                      <li>Locale</li>
                    </ul>
                    <select className="dropdown" defaultValue={'DEFAULT'} onChange={this.newExtension}>
                      <option value="DEFAULT" disabled hidden>Select the extension file pattern...</option>
                      <option value="Machine Translation     Repo" disabled>Source       Locale</option>
                      {eList.map(
                        (eList, i) =>
                          <PatternList
                            key={i}
                            source={eList.source}
                            sourceEx={eList.sourceEx}
                            locale={eList.locale}
                            localeEx={eList.localeEx}
                          />
                      )}
                    </select><br />
                  </div>
                </div>
              </div>
              <div id="resx" className="tab">
                <h3>.resx</h3>
                <h4 className="tab">Extension File Pattern</h4>
                <div className="tab">
                  <div id="grid" className="tab">
                    <ul id="headers">
                      <li>Source</li>
                      <li>Locale</li>
                    </ul>
                    <select className="dropdown" defaultValue={'DEFAULT'}>
                      <option value="DEFAULT" disabled hidden>Select the extension file pattern...</option>
                      <option value="Machine Translation     Repo" disabled>Source       Locale</option>
                      {eList.map(
                        (eList, i) =>
                          <PatternList
                            key={i}
                            source={eList.source}
                            sourceEx={eList.sourceEx}
                            locale={eList.locale}
                            localeEx={eList.localeEx}
                          />
                      )}
                    </select><br />
                  </div>
                </div>
              </div>
              <div id="properties" className="tab">
                <h3>.properties</h3>
                <h4 className="tab">Extension File Pattern</h4>
                <div className="tab">
                  <div id="grid" className="tab">
                    <ul id="headers">
                      <li>Source</li>
                      <li>Locale</li>
                    </ul>
                    <select className="dropdown" defaultValue={'DEFAULT'}>
                      <option value="DEFAULT" disabled hidden>Select the extension file pattern...</option>
                      <option value="Machine Translation     Repo" disabled>Source       Locale</option>
                      {eList.map(
                        (eList, i) =>
                          <PatternList
                            key={i}
                            source={eList.source}
                            sourceEx={eList.sourceEx}
                            locale={eList.locale}
                            localeEx={eList.localeEx}
                          />
                      )}
                    </select><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="container">
          <button type="submit" className="formButtons confButton" id="saveButton" onClick={save}>SAVE</button>
          <Link to="/"><button type="submit" className="formButtons confButton" id="cancelButton">EXIT</button></Link>
        </div>
      </div>
    )
  }
}
