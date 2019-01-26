import React from 'react'
import './Render.css'

const Render = ({code, onLoad}) => {
  const encoded = Buffer.from(code).toString('base64')

  return (
    <img
      className="render"
      src={`https://sprite.tms.sh/chart/${encoded}`}
      alt="Chart preview"
      onLoad={onLoad}
    />
  )
}

export default Render
