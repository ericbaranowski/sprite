import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import './App.css'
import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'

const App = () => {
  const [code, setCode] = useState(`graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;`)

  return (
    <div className="app">
      <Header />
      <div className="content">
        <SplitPane split="vertical" minSize={500} defaultSize="50%">
          <Editor value={code} onChange={setCode} />
          <Preview value={code} />
        </SplitPane>
      </div>
    </div>
  )
}

export default App
