import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'
import Share from './Share'

import styles from './App.module.css'

const App = () => {
  const [code, setCode] = useState(`graph TB
  start(Start)

  start --> login[Login]
  
  login --> auth{Authorized?}

  auth --> tooManyTries{Attempted 3 times?}
  auth --> granted[Access granted]

  tooManyTries --> login

  granted --> exit{Exit module?}

  exit --> granted
  exit --> finish(Start)

  tooManyTries --> finish`)

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
        <Share code={code} />
      </div>
      <div className={styles.body}>
        <SplitPane split="vertical" minSize={500} defaultSize="50%">
          <Editor code={code} onChange={setCode} />
          <Preview code={code} />
        </SplitPane>
      </div>
    </div>
  )
}

export default App
