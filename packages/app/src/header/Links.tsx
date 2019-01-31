import React from 'react'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import styles from './Links.module.css'
import HeaderButton from './HeaderButton'

const openUrl = (url: string) => window.open(url)

const Links = () => (
  <div className={styles.links}>
    <HeaderButton
      onClick={() => openUrl('https://github.com/TimoSta/sprite')}
      title="Sprite on GitHub"
      className={styles.link}
      icon={faGithub}
    />
    <HeaderButton
      onClick={() => openUrl('https://twitter.com/spritedotlink/')}
      title="Sprite on Twitter"
      className={styles.link}
      icon={faTwitter}
    />
  </div>
)

export default Links
