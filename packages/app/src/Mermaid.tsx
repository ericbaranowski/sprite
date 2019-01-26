import React, {useState, useEffect} from 'react'
import mermaid from 'mermaid'

import './Mermaid.css'

mermaid.mermaidAPI.initalize({startOnLoad: false})

interface Props {
  id: string
  content: string
}

const Mermaid = ({id, content}: Props) => {
  const [chart, setChart] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(
    () => {
      try {
        console.log('redrawing')
        mermaid.mermaidAPI.parse(content)
        mermaid.mermaidAPI.render(id, content, setChart)
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
