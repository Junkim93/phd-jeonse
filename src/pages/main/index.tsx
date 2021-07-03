import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import MainHeader from '@components/main-header/index'
import Button from '@components/_reusable/button/index'
import SideButton from '@components/_reusable/side-button/index'
import Woohoo from '@components/_reusable/woohoo/index'
import PaperLayout from '@components/layout/paper/index'
import { useHistory } from 'react-router-dom'

function Main() {
  const history = useHistory()

  return (
    <>
      <Woohoo />
      <PaperLayout>
        <MainHeader />
        <div className={cls(styles.contents)}>
          <div className={cls(styles.mainBtns)}>
            <Button
              label={'부동산 계약 전 십계명'}
              type={'white'}
              onClick={() => history.push('/ten-commandments')}
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
      </PaperLayout>
    </>
  )
}

export default Main
