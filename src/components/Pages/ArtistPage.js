import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const ArtistPage = () => {
  return (
    <div>

      <div className="artist-container">
        <img src="https://www.thecultureconcept.com/wp-content/uploads/2015/08/Sargent-1.jpg" alt="Avatar" className="image" />
        <div className="text-display">
          <div className="image-display">
            <img className="artist-image-display" src="https://www.metmuseum.org/-/media/images/exhibitions/2015/sargent/blog/post-1/sargent_selfportrait.jpg?sc_lang=en"/>
          </div>

          <div className='text-display-title'>
            <h1>Vigee<br />Le Brun</h1>
            <p style={{ padding: '0em 13em', fontSize: '.7em', lineHeight: '1.4em' }}>The greatest French follower of Caravaggio, Valentin de Boulogne was also one of the outstanding artists in 17th-century Europe. In the years following Caravaggios death, he emerged as one of the most original protagonists of the new, naturalistic painting.</p>

            <div className='audio-container'>
              <div className="audio-display">
                <img src="https://theartwolf.com/wp-content/uploads/2021/05/sargent-monet-painting-1.jpg" className="audio-image"/>
                <ReactAudioPlayer src='google.com' autoPlay controls/>
              </div>
              <div className="audio-display">
                <img src="https://theartwolf.com/wp-content/uploads/2021/05/sargent-monet-painting-1.jpg" className="audio-image"/>
                <ReactAudioPlayer src='google.com' autoPlay controls/>
              </div>
              <div className="audio-display">
                <img src="https://theartwolf.com/wp-content/uploads/2021/05/sargent-monet-painting-1.jpg" className="audio-image"/>
                <ReactAudioPlayer src='google.com' autoPlay controls/>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ArtistPage
