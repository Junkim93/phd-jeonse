import React from 'react'
import styles from './PaperBg.module.scss'
import cls from 'classnames'
import { Props } from './index'

function PaperBg({ className, children, theme }: Props) {
  return (
    <div
      className={cls(
        styles.main__bg,
        styles.paper__bg,
        styles[`theme__${theme}`],
        className,
      )}
    >
      {children}
    </div>
  )
}

export default PaperBg
