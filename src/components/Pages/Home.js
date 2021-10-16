import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Home.scss'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <>
        <div className="external">
          <div className="horizontal-scroll-wrapper">
            <div className="img-wrapper slower">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11605/33068/main-image" target="_blank" rel="noopener noreferrer"><img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11605/33068/main-image" alt=""/>
              </a>
            </div>

            <div className="img-wrapper faster">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11130/34226/main-image" target="_blank" rel="noopener noreferrer">
                <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11130/34226/main-image" alt=""/>
              </a>
            </div>

            <div className="img-wrapper slower vertical">
              <a href="https://images.metmuseum.org/CRDImages/rl/original/DT711.jpg" target="_blank" rel="noopener noreferrer">
                <img src="https://images.metmuseum.org/CRDImages/rl/original/DT711.jpg" alt=""/>
              </a>
            </div>

            <div className="img-wrapper slower slower-down">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/437053/796070/main-image" target="_blank" rel="noopener noreferrer">
                <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/437053/796070/main-image" alt=""/>
              </a>
            </div>

            <div className="img-wrapper">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/459106/1964622/main-image" target="_blank" rel="noopener noreferrer">
                <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/459106/1964622/main-image" alt=""/>
              </a>
            </div>

            <div className="img-wrapper slower">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/438417/796421/main-image" target="_blank" rel="noopener noreferrer">
                <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/438417/796421/main-image" alt=""/>
              </a>
            </div>

            <div className="img-wrapper faster1">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/459093/914088/main-image" target="_blank" rel="noopener noreferrer">
                <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/459093/914088/main-image" alt=""/>
              </a>
            </div>

            <div className="img-wrapper slower slower2">
              <a href="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11797/33062/main-image" target="_blank" rel="noopener noreferrer">
                <img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11797/33062/main-image" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Home)
