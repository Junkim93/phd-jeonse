import React from 'react'
import Title from '@components/_reusable/title/index'
import jeonseImg from '@assets/phd-jeonse.svg'
import styles from './index.module.scss'
import cls from 'classnames'

function MainHeader() {
  return (
    <header className={cls(styles.mainHeader)}>
      <h1 className={cls(styles.mainTitle)}>
        <Title />
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
