import React, { Component } from "react";
import Navigation from "./navigation";
import PageContent from "./page-content";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Burke Rich's Component Lifecycle Deep Dive Page</h1>
        <h2>React Skeleton...click...clack...BOOOOO!!!</h2>

        <Navigation />
        <PageContent />
      </div>
    );
  }
}