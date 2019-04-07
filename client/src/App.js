import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }
  
  render() {
    return (
      <div className="container">
        <h1>Tone Analyser</h1>
        <div>
          <div className="form-group">
            <textarea className="form-control" id="text-input" placeholder="Enter text here" onChange={e=>this.updateText(e)}></textarea>
          </div>
          <button className="btn btn-info" onClick={() => this.getTones()}>Retrieve Tones</button>
        </div>
      </div>
    );
  }
}
