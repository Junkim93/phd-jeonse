import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import img from '@assets/trident-light.svg'

interface ButtonProps {
  label: String
  onClick: () => void
  type?: 'gray' | 'white'
}

function SideButton({ label, onClick, type = 'white' }: ButtonProps) {
  const icon = type === 'gray' ? img : null
  const buttonStyle = type === 'white' ? styles.buttonWhite : styles.buttonGray

  return (
    <button className={cls(styles.button, buttonStyle)} onClick={onClick}>
      <span>{label}</span>
      {icon !== null ? <img alt="트라이던트 이미지" src={img} /> : null}
    </button>
  )
}

export default SideButton
