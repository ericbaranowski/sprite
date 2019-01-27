import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'
import Share from './Share'

import styles from './App.module.css'
import Help from './Help'

const App = () => {
  const [code, setCode] = useState(`graph TB
  start(Start)

  start ==> login[Login]
  
  login ==> auth{Authorized?}

  auth -- No  --> tooManyTries{Attempted 3 times?}
  auth == Yes ==> granted[Access granted]

  granted ==> exit{Exit module?}

  exit -- No  --> granted
  exit == Yes ==> finish(End)

  tooManyTries -- No  --> login
  tooManyTries -- Yes --> finish
`)

  const isPortrait = window.innerHeight > window.innerWidth

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
        <Help />
        {!isPortrait && <Share code={code} />}
      </div>
      <div className={styles.body}>
        <SplitPane
          split={isPortrait ? 'horizontal' : 'vertical'}
          minSize={500}
          defaultSize="50%"
        >
          <Editor code={code} onChange={setCode} />
          <Preview code={code} />
        </SplitPane>
      </div>
    </div>
  )
}

export default App
