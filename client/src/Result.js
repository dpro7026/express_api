import React, { Component } from 'react';

export default class Result extends Component {

  render() {
    return (
    <div className='form-block'>
      <div className="row">
        <div className="col">
          <h2>Text</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {this.props.text}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Tones</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          tones_placeholder
        </div>
      </div>
    </div>
  );
  }
}
