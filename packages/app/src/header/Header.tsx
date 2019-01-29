import React from 'react'
import useDeviceInfo from '../util/useDeviceInfo'
import Title from './Title'
import Help from './Help'
import Share from './Share'
import styles from './Header.module.css'

interface Props {
  code: string
}

const Header = ({code}: Props) => {
  const {isMobile} = useDeviceInfo()

  return (
    <header className={styles.header}>
      <Title />
      {!isMobile && <Help />}
      {!isMobile && <Share code={code} />}
    </header>
  )
}

export default Header
