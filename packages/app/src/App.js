import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import './App.css'
import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'

const App = () => {
  const [code, setCode] = useState(`graph TB
  c1-->a2

  subgraph one
    a1-->a2
  end

  subgraph two
    b1-->b2
  end
  
  subgraph three
    c1-->c2
  end`)

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
