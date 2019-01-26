import React, {useState, useEffect} from 'react'
import './Preview.css'
import Render from './Render'

interface Props {
  code: string
}

const Preview = ({code}: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      setLoading(true)
    },
    [code]
  )

  return (
    <div className={`preview ${loading ? 'loading' : ''}`}>
      <Render code={code} onLoad={() => setLoading(false)} />
    </div>
  )
}

export default Preview
