import React from 'react'

import './Editor.css'

const Editor = ({value, onChange, className}) => (
  <div className="editor">
    <textarea
      className="input"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
)

export default Editor
