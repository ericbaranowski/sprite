import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import './Editor.css'

const options = {
  automaticLayout: true,
  autoIndent: true,
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  minimap: {enabled: false}
}

const Editor = ({value, onChange}) => (
  <div className="editor">
    <MonacoEditor
      value={value}
      onChange={onChange}
      options={options}
      theme="vs-dark"
    />
  </div>
)

export default Editor
