import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import styles from './Links.module.css'
import ChangeLog from './ChangeLog'

const Links = () => (
  <div className={styles.links}>
    <a
      href="https://github.com/TimoSta/sprite"
      title="Sprite on GitHub"
      target="_new"
      className={styles.item}
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://twitter.com/spritedotlink/"
      title="Sprite on Twitter"
      target="_new"
      className={styles.item}
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <ChangeLog className={styles.item} />
  </div>
)

export default Links
