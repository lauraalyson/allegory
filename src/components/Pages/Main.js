import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '././../../index.scss'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <p>New Screen</p>
      </div>
    )
  }
}

export default withRouter(Main)
