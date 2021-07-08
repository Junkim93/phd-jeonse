import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import MainHeader from '@components/main-header/index'
import Button from '@components/_reusable/button/index'
import SideButton from '@components/_reusable/side-button/index'
import Woohoo from '@components/_reusable/woohoo/index'
import PaperLayout from '@components/layout/paper/index'
import { useHistory } from 'react-router-dom'
import {
  TEN_COMMANDMENTS_PATH,
  CHECKLIST_GUIDE_PATH,
  TESTAMENT_PATH,
} from '@router/path'

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
              arrow
              type="route"
              theme="white"
              onClick={() => history.push(TEN_COMMANDMENTS_PATH)}
            />
            <Button
              label={'체크리스트 보러가기'}
              arrow
              type="route"
              onClick={() => history.push(CHECKLIST_GUIDE_PATH)}
            />
          </div>
          <div className={cls(styles.sideBtns)}>
            <SideButton
              label={'제작자의 유언..'}
              type={'gray'}
              onClick={() => history.push(TESTAMENT_PATH)}
            />
          </div>
        </div>
      </PaperLayout>
    </>
  )
}

export default Main
