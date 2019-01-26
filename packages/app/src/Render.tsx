import React from 'react'
import './Render.css'

interface Props {
  code: string
  onLoad: () => void
}
const Render = ({code, onLoad}: Props) => {
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
