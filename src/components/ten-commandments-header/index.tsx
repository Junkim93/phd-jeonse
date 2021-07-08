import React from 'react'
import cls from 'classnames'
import styles from './index.module.scss'
import keySvg from '@assets/key-rotate.svg'
import crossSvg from '@assets/cross.svg'
import checklistBarSvg from '@assets/checklist-bar.svg'

function TenCommandmentsHeader() {
  return (
    <div className={cls(styles.checklist__header)}>
      <img className={cls(styles.key)} src={keySvg} alt="yellow key" />
      <div className={cls(styles.title__wrapper)}>
        <img className={cls(styles.image)} src={crossSvg} alt="yellow cross" />
        <span className={cls(styles.title)}>전세박사 10계명</span>
        <img className={cls(styles.image)} src={crossSvg} alt="yellow cross" />
      </div>
      <img src={checklistBarSvg} alt="checklist bar" />
    </div>
  )
}

export default TenCommandmentsHeader
