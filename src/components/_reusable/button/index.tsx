import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import rightArrowRed from '@assets/right-arrow-red.svg'
import rightArrowWhite from '@assets/right-arrow-white.svg'

interface ButtonProps {
  label: String
  onClick?: () => void
  type?: 'default' | 'route'
  arrow?: boolean
  theme?: 'white' | 'red'
  className?: string
}

function Button({
  label,
  onClick,
  className,
  type = 'default',
  theme = 'red',
  arrow = false,
}: ButtonProps) {
  const arrowSvg = theme === 'white' ? rightArrowRed : rightArrowWhite
  const buttonTheme = theme === 'white' ? styles.white : styles.red
  const buttonType =
    type === 'default' ? styles.button__default : styles.button__route

  return (
    <button
      className={cls(styles.button, buttonType, buttonTheme, className)}
      onClick={onClick}
    >
      <span className={cls(styles.label)}>{label}</span>
      {arrow ? (
        <img
          className={cls(styles.arrow__img)}
          alt="오른쪽 화살표"
          src={arrowSvg}
        />
      ) : null}
    </button>
  )
}

export default Button
