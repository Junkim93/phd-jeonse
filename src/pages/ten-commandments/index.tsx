import React from 'react'
import { useHistory } from 'react-router-dom'
import cls from 'classnames'
import PaperLayout from '@components/layout/paper/index'
import TenCommandmentsHeader from '@components/ten-commandments-header/index'
import TenCommandmentsContents from '@components/ten-commandments/index'
import CancelButton from '@components/_reusable/cancel-button/index'
import styles from './index.module.scss'

function TenCommandments() {
  const history = useHistory()

  return (
    <PaperLayout>
      <CancelButton
        className={cls(styles.cancel)}
        onClick={() => history.push('/')}
      />
      <TenCommandmentsHeader />
      <TenCommandmentsContents />
    </PaperLayout>
  )
}

export default TenCommandments
