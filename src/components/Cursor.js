import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './../index.scss'

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientXDot: 0,
    clientYDot: 0
  })

  const updatePosition = (event) => {
    const { clientX, clientY } = event
    setPosition({
      clientXDot: clientX,
      clientYDot: clientY
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, false)
    document.addEventListener('mouseenter', updatePosition, false)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  return position
}

const useMousePositionDelay = () => {
  const [position, setPosition] = useState({
    clientXCircle: 0,
    clientYCircle: 0
  })

  const updatePosition = (event) => {
    const { clientX, clientY } = event
    setTimeout(() => {
      setPosition({
        clientXCircle: clientX,
        clientYCircle: clientY
      })
    }, 100)
  }

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, false)
    document.addEventListener('mouseenter', updatePosition, false)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  return position
}

const Cursor = () => {
  const { clientXDot, clientYDot } = useMousePosition()
  const { clientXCircle, clientYCircle } = useMousePositionDelay()
  return (
    <>
      <div className="dot-cursor">
        <svg
          width={40}
          height={40}
          viewBox="0 0 50 50"
          style={{
            position: 'absolute',
            left: clientXDot,
            top: clientYDot,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <circle cx="25" cy="25" r="8" fill="#F2E9D2" />
        </svg>
      </div>
      <div className="circle">
        <svg
          width={90}
          height={90}
          viewBox="0 0 100 100"
          style={{
            position: 'absolute',
            left: clientXCircle,
            top: clientYCircle,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <circle
            className="progress-ring__circle"
            strokeWidth="1"
            r="40"
            cx="50"
            cy="50"
            fill="transparent"
            stroke="gray"
          />
        </svg>
      </div>
    </>
  )
}

export default withRouter(Cursor)
