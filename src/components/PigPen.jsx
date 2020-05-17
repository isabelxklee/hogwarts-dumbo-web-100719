import React, { Component } from 'react'
import PigCard from "./PigCard.jsx"

class PigPen extends Component {
  render() {
    let pigsArr = this.props.hogs.map((singlePig) => {
      return <PigCard
        key = { singlePig.name }
        hog = { singlePig }
      />
    })

    return (
      <div>
        { pigsArr }
      </div>
    )
  }
}

export default PigPen