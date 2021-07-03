import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import cls from 'classnames'

interface Props {
  children?: ReactNode
}

function PaperLayout({ children }: Props) {
  return <div className={cls(styles.main)}>{children}</div>
}

export default PaperLayout
