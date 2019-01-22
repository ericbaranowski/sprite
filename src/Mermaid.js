import React, {useState, useEffect} from 'react'
import {mermaidAPI} from 'mermaid'

import './Mermaid.css'

mermaidAPI.initialize({startOnLoad: false})

const Mermaid = ({id, content}) => {
  const [chart, setChart] = useState(null)
  const [error, setError] = useState(null)

  useEffect(
    () => {
      try {
        console.log('redrawing')
        mermaidAPI.parse(content)
        mermaidAPI.render(id, content, setChart)
        setError(null)
      } catch (err) {
        console.log(err)
        setChart(null)
        setError(err.str)
      }
    },
    [id, content]
  )

  if (error) return <pre className="error">{error}</pre>

  return chart && <div dangerouslySetInnerHTML={{__html: chart}} />
}

export default Mermaid
