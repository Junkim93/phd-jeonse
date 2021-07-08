import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import titleSvg from '@assets/title.svg'

interface Props {
  size?: 'small' | 'default'
  className?: string
}

function Title({ size = 'default', className }: Props) {
  const smallClass = size === 'small' ? styles.small : null

  return (
    <img
      alt="title"
      src={titleSvg}
      className={cls(styles.title, smallClass, className)}
    />
  )
}

export default Title
