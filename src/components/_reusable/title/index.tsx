import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import titleSvg from '@assets/title.svg'

interface Props {
  size?: 'small' | 'default'
}

function Title({ size = 'default' }: Props) {
  const smallClass = size === 'small' ? styles.small : null

  return (
    <img alt="title" src={titleSvg} className={cls(styles.title, smallClass)} />
  )
}

export default Title
