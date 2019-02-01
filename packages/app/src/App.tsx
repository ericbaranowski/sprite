import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import useDeviceInfo from './util/useDeviceInfo'
import {Header} from './header'
import {Editor} from './editor'
import {Preview} from './preview'
import MobileWarning from './MobileWarning'
import styles from './App.module.css'

const defaultCode = `graph TB
  start(Start) ==> login[Login]

  subgraph Authorization
    login[Login]
    login ==> auth?{authorized?}

    auth? -- No --> tooManyTries?{attempted 3 times?}
  end

  auth? == Yes ==> access

  subgraph Internal
    access[Access granted]

    access ==> exit?{exit module?}
  end

  exit? -- No  --> access
  exit? == Yes ==> finish(End)

  tooManyTries? -- No  --> login
  tooManyTries? -- Yes --> finish
`

const App = () => {
  const [code, setCode] = useState(defaultCode)

  const {isPortrait} = useDeviceInfo()

  return (
    <div className={styles.app}>
      <Header code={code} />

      <div className={styles.body}>
        <SplitPane
          split={isPortrait ? 'horizontal' : 'vertical'}
          defaultSize="50%"
        >
          <Editor code={code} onChange={setCode} />
          <Preview code={code} />
        </SplitPane>
      </div>

      <MobileWarning />
    </div>
  )
}

export default App
