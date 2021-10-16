import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '././../../index.scss'

class Headline extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div className="headline-container">
        <h1 className="headline" >Allegory</h1>
        <a href="https://github.com/lauraalyson/allegory"> <p> &nbsp;About </p> </a>
        <a href="https://github.com/lauraalyson/allegory"> <p> &nbsp;Source </p> </a>
      </div>
    )
  }
}

export default withRouter(Headline)
