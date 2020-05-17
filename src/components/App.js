import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav"
import PigPen from './PigPen.jsx'
// import hogs from '../porkers_data'

class App extends Component {
  state = {
    hogs: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/hogs")
    .then(r => r.json())
    .then((arrHogs) => {
      this.setState({
        hogs: arrHogs
      })
    })
  }

  render() {

    return (
      <div className="App">
        <Nav />
        <PigPen hogs = { this.state.hogs } />
      </div>
    );
  }
}

export default App;
