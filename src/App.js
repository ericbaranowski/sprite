import React, {useState} from 'react'
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
      <Editor value={code} onChange={setCode} />
      <Preview value={code} />
    </div>
  )
}

export default App
