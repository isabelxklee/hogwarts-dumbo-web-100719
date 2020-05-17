import React, { Component } from 'react'

export default class PigCard extends Component {
  state = {
    showDetails: false
  }

  handleDetails = (event) => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    let { name, specialty, greased, weight, ['highest medal achieved']: medal } = this.props.hog
    let imageName = name.toLowerCase().split(" ").join("_")
    let pigImage = require(`../hog-imgs/${imageName}.jpg`)

    return (
      <div className="pigTile">
       <h1>{ name }</h1>
       <img src= {pigImage} alt={name} onClick={ this.handleDetails }/>
       { this.state.showDetails
        ?
        <div>
          <p>Speciality: { specialty }</p>
          <p>Greased: { greased ? "Greased" : "Non-greased" }</p>
          <p>Weight: { weight } lbs </p>
          <p>Highest medal achieved: { this.props.hog["highest medal achieved"] }</p>
        </div>
        : null}
      </div>
    )
  }
}
