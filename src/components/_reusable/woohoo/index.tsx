import React from 'react'
import woohooImg from '@assets/woohoo.svg'
import styles from './index.module.scss'
import cls from 'classnames'

function Woohoo() {
  return <img className={cls(styles.woohoo)} alt="폭죽" src={woohooImg} />
}

export default Woohoo
