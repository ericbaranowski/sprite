import React from 'react'
import classnames from 'classnames'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import styles from './HeaderButton.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface Props {
  icon: IconDefinition
  title: string
  className?: string
  onClick: () => void
}

const HeaderButton = ({icon, title, className, onClick}: Props) => (
  <span
    onClick={onClick}
    title={title}
    className={classnames(styles.button, className)}
  >
    <FontAwesomeIcon icon={icon} />
  </span>
)

export default HeaderButton
