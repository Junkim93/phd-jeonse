import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import rightArrowRed from '@assets/right-arrow-red.svg'
import rightArrowWhite from '@assets/right-arrow-white.svg'

interface ButtonProps {
  label: String
  onClick: () => void
  type?: 'white' | 'red'
}

function Button({ label, onClick, type = 'white' }: ButtonProps) {
  const arrow = type === 'white' ? rightArrowRed : rightArrowWhite
  const buttonStyle = type === 'white' ? styles.white : styles.red

  return (
    <button className={cls(styles.button, buttonStyle)} onClick={onClick}>
      <span className={cls(styles.label)}>{label}</span>
      <img className={cls(styles.arrow__img)} alt="오른쪽 화살표" src={arrow} />
    </button>
  )
}

export default Button
