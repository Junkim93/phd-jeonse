import React from 'react'
import PaperLayout from '@components/layout/paper/index'
import TenCommandmentsHeader from '@components/ten-commandments-header/index'
import TenCommandmentsContents from '@components/ten-commandments/index'
import Button from '@components/_reusable/button/index'
import styles from './index.module.scss'

function TenCommandments() {
  return (
    <PaperLayout theme="red" className={styles.commandments__layout}>
      <TenCommandmentsHeader />
      <TenCommandmentsContents />
      <Button className={styles.download} label="이미지로 저장하고 명심하기" />
    </PaperLayout>
  )
}

export default TenCommandments
