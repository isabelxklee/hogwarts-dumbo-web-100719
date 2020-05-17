import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav"
import PigPen from './PigPen.jsx'
import hogs from '../porkers_data'

class App extends Component {
  state = {
    allHogs: hogs
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/hogs")
  //   .then(r => r.json())
  //   .then(console.log)
  // }

  render() {

    return (
      <div className="App">
        <Nav />
        <PigPen hogs = { this.state.allHogs } />
      </div>
    );
  }
}

export default App;
