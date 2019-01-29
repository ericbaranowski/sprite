import React from 'react'
import classnames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import styles from './ChangeLog.module.css'

interface Props {
  className?: string
}

const ChangeLog = ({className}: Props) => {
  return (
    <span className={classnames(className, styles.container)}>
      <FontAwesomeIcon
        title="What's new?"
        className={className}
        icon={faBell}
      />

      <div className={styles.unreadMarker} />
    </span>
  )
}

export default ChangeLog
