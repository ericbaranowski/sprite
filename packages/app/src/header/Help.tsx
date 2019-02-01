import React, {useState} from 'react'
import styles from './Help.module.css'
import usePersistedState from '../util/usePersistedState'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import HeaderButton from './HeaderButton'
import Dialog from '../Dialog'

const Help = () => {
  const [helpTooltipDismissed, setHelpTooltipDismissed] = usePersistedState(
    'helpTooltipDismissed',
    false
  )

  const [showHelpDialog, setShowHelpDialog] = useState(false)

  return (
    <>
      <div className={styles.help}>
        <HeaderButton
          title="Help"
          onClick={() => setShowHelpDialog(true)}
          icon={faQuestionCircle}
        />
      </div>
      {showHelpDialog && (
        <Dialog>
          <p>
            😵 <b>Confused with how to use mermaid flowchart syntax?</b>{' '}
            <a href="https://mermaidjs.github.io/flowchart.html" target="_new">
              Visit the official docs
            </a>{' '}
            for help with the mermaid flowchart syntax and an overview over all
            available features!
          </p>
          <p>
            A big thanks to{' '}
            <a href="https://mobile.twitter.com/_philpl" target="_new">
              @_philpl
            </a>{' '}
            for giving us permission to use the Dank Mono font.{' '}
            <a href="https://dank.sh/" target="_new">
              Go check it out!
            </a>{' '}
            👩‍💻
          </p>
          <button onClick={() => setShowHelpDialog(false)}>Close</button>
        </Dialog>
      )}
    </>
  )
}

export default Help
