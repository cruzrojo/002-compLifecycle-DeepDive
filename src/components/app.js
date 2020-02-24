import React, { Component } from 'react';
import Discussion from './discussion';
import Rules from './rules';
import Workflow from './workflow';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Burke Rich's Component Lifecycle Deep Dive Page</h1>
        <h2>React Skeleton...click...clack...BOOOOO!!!</h2>
        <Discussion />
        <Rules />
        <Workflow />
      </div>
    );
  }
}