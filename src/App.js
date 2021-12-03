/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Pages/Home'
import Headline from './components/Pages/Headline'
import Cursor from './components/Cursor'
import Main from './components/Pages/Main'
import ArtistPage from './components/Pages/ArtistPage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <main className='container'>
          <Route path='/details' render={() => <Main />} />
          <Route path='/' render={() => <ArtistPage />} />
          <Route path='/home' render={() => <Headline />} />
          <Route path='/home' render={() => <Home />} />
        </main>
        <Cursor />
      </Fragment>
    )
  }
}

export default App
