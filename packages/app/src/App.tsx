import React, {useState} from 'react'
import SplitPane from 'react-split-pane'
import MobileDetect from 'mobile-detect'

import Editor from './Editor'
import Preview from './Preview'
import Header from './Header'
import Share from './Share'
import Help from './Help'

import styles from './App.module.css'

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

  const isMobile = Boolean(
    new MobileDetect(window.navigator.userAgent).mobile()
  )
  const isPortrait = window.innerHeight > window.innerWidth

  const [showMobileWarning, setShowMobileWarning] = useState(isMobile)

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
        {!isMobile && <Help />}
        {!isMobile && <Share code={code} />}
      </div>
      <div className={styles.body}>
        <SplitPane
          split={isPortrait ? 'horizontal' : 'vertical'}
          defaultSize="50%"
        >
          <Editor code={code} onChange={setCode} />
          <Preview code={code} />
        </SplitPane>
      </div>

      {showMobileWarning && (
        <div className={styles.dialog}>
          <p>
            <b>
              Sprite doesn't properly support mobile browsers yet. Sorry for
              that! 😔
            </b>
          </p>
          <p>
            It's on our radar though. If you want to follow along or contribute
            yourself,{' '}
            <a href="https://github.com/TimoSta/sprite/issues/10">
              take a look at the issue tracker!
            </a>
          </p>
          <button onClick={() => setShowMobileWarning(false)}>
            Use Sprite anyway
          </button>
        </div>
      )}
    </div>
  )
}

export default App
