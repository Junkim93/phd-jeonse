import React, { forwardRef, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import cls from 'classnames'
import PaperBg from './PaperBg'
import Title from '@components/_reusable/title/index'
import CancelButton from '@components/_reusable/cancel-button/index'

export interface Props {
  children?: ReactNode
  className?: string
  theme?: 'red' | 'white' | 'blue'
  hasPadding?: boolean
}

const PaperLayout = forwardRef<HTMLDivElement, Props>(
  ({ children, className, theme, hasPadding = false }, ref) => {
    const titleHas = theme !== undefined
    const paddingStyle = hasPadding ? styles.paper__padding : null
    const history = useHistory()

    return (
      <PaperBg theme={theme}>
        {titleHas ? (
          <h1>
            <Title className={cls(styles.title__position)} size="small" />
          </h1>
        ) : null}
        <div ref={ref} className={cls(styles.paper, paddingStyle, className)}>
          {titleHas ? (
            <CancelButton
              className={cls(styles.cancel)}
              onClick={() => history.push('/')}
            />
          ) : null}
          {children}
        </div>
      </PaperBg>
    )
  },
)

export default PaperLayout
