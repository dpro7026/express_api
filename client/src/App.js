import React, { Component } from 'react';
import './App.css';
import Result from './Result';

export default class App extends Component {
  constructor() {
    super();
  
    this.state = {
      text: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation...',
      tones: []
    };
  }

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
        <Result text={this.state.text} />
      </div>
    );
  }
}
