import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import MainHeader from '@components/main-header/index'
import Button from '@components/_reusable/button/index'
import SideButton from '@components/_reusable/side-button/index'

function Main() {
  return (
    <div className={cls(styles.main)}>
      <MainHeader />
      <div className={cls(styles.contents)}>
        <div className={cls(styles.mainBtns)}>
          <Button
            label={'부동산 계약 전 십계명'}
            type={'white'}
            onClick={() => console.info('test')}
          />
          <Button
            label={'체크리스트 보러가기'}
            type={'red'}
            onClick={() => console.info('test')}
          />
        </div>
        <div className={cls(styles.sideBtns)}>
          <SideButton
            label={'제작자의 유언..'}
            type={'gray'}
            onClick={() => console.info('test')}
          />
        </div>
      </div>
    </div>
  )
}

export default Main
