import React from 'react'
import './Preview.css'
import Render from './Render'

const Preview = ({value, className}) => (
  <div className="preview">
    {/* <Mermaid id="foo" content={value} /> */}
    <Render code={value} />
  </div>
)

export default Preview
