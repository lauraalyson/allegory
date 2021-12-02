import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import artists from './../../assets/data/artists'
// import ReactAudioPlayer from 'react-audio-player'
import '././../../index.scss'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const images = artists.map((artist) => (
      <img key={artist} src={require(`./../../assets/images/${artist.artistImage}`)} className='image-responsive'/>
    ))

    return (
      <div>
        {artists.map((artist) => (
          <div className='artist-info' key={artist.id}>
            <h2>{`${artist.name}`}</h2>
            <img src={images[artist.id - 1]}/>
            <p>
              {artist.origin}<br />
              {artist.date}<br />
              {artist.style}<br />
            </p>
            <p>{artist.description}</p>

            {artist.artwork.map((artwork) => (
              <div key={artwork.id}>
                <h4>{artwork.title}</h4>
                <p>
                  {artwork.date}<br />
                  {artwork.medium}<br />
                  {artwork.image}<br />
                  {artwork.audio}<br />
                </p>
              </div>
            ))}

          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(Main)
