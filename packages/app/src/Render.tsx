import React, {useState, useEffect} from 'react'
import './Render.css'

interface Props {
  code: string
}
const Render = ({code}: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      setLoading(true)
    },
    [code]
  )

  const encoded = Buffer.from(code).toString('base64')

  return (
    <img
      className={`render ${loading ? 'loading' : ''}`}
      src={`https://sprite.tms.sh/chart/${encoded}`}
      alt="Chart preview"
      onLoad={() => setLoading(false)}
    />
  )
}

export default Render
