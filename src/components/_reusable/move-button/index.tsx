import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import rightArrowSvg from '@assets/arrow-black.svg'

interface Props {
  label: string
  align?: 'left' | 'right'
  onClick?: () => void
}

function MoveButton({ align = 'left', label, onClick }: Props) {
  console.info(align)
  return (
    <button
      className={cls(styles.move_button, styles[align])}
      onClick={onClick}
    >
      <img
        className={styles.arrow_img}
        src={rightArrowSvg}
        alt="이전 페이지 이동"
      />
      <span>{label}</span>
    </button>
  )
}

export default MoveButton
