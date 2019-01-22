import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import './Editor.css'
import registerMermaidLanguage from './util/MermaidMonaco'

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
      theme="mermaid-theme"
      language="mermaid"
      editorWillMount={monaco => registerMermaidLanguage(monaco)}
    />
  </div>
)

export default Editor
