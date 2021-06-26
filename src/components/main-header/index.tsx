import React from 'react'
import titleImg from '@assets/title.svg'
import jeonseImg from '@assets/phd-jeonse.svg'
import woohooImg from '@assets/woohoo.svg'
import styles from './index.module.scss'
import cls from 'classnames'

function MainHeader() {
  return (
    <header className={cls(styles.mainHeader)}>
      <img className={cls(styles.woohoo)} alt="우후" src={woohooImg} />
      <h1 className={cls(styles.mainTitle)}>
        <img alt="전세박사" src={titleImg} />
      </h1>
      <img
        className={cls(styles.symbol)}
        alt="전세박사 캐릭터"
        src={jeonseImg}
      />
    </header>
  )
}

export default MainHeader
