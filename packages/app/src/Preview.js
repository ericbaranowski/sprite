import React, {useState, useEffect} from 'react'
import './Preview.css'
import Render from './Render'

const Preview = ({value}) => {
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      setLoading(true)
    },
    [value]
  )

  return (
    <div className={`preview ${loading ? 'loading' : ''}`}>
      {/* <Mermaid id="foo" content={value} /> */}
      <Render code={value} onLoad={() => setLoading(false)} />
    </div>
  )
}

export default Preview
