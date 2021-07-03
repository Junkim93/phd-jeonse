import React from 'react'
import closeBtn from '@assets/btn-close.svg'

interface Props {
  className?: string
  onClick?: () => void
}

function CancelButton({ onClick, className }: Props) {
  return (
    <button className={className} onClick={onClick}>
      <img src={closeBtn} alt="close button" />
    </button>
  )
}

export default CancelButton
