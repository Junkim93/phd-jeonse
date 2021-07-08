import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import cls from 'classnames'
import PaperLayout from '@components/layout/paper/index'
import MoveButton from '@components/_reusable/move-button/index'
import rotateKeySvg from '@assets/key-rotate.svg'

function ChecklistGuide() {
  const history = useHistory()

  return (
    <PaperLayout theme="red" hasPadding>
      <h2 className={cls(styles.header)}>체크리스트를 하기 전에..</h2>
      <div aria-describedby="paragraph">
        <p className={cls(styles.main_description, 'medium')}>
          아아, 안녕하십니까? 예비 임차인님!
        </p>
        <p className={cls(styles.description)}>
          전세 집을 알아보고 있으신가요? 저는 예비 임차인님이 안전한 선택을
          하도록 도와주는 전세박사 입니다.
        </p>
        <p className={cls(styles.description)}>
          체크리스트는 당장 눈 앞에 놓인 계약서를 하나 하나 체크해보며 전세의
          위험도를 파악하게 도와주는 서비스입니다. 하지만 선택은 반드시 본인
          몫임을 반드시 명심하세요.
        </p>
        <p className={cls(styles.description)}>
          상상해보세요. ‘빚 1억과 함께 살고있는 집에서 쫓겨난다.’ 끔찍하죠?
          전세박사와 함께 최악의 상황은 모면합시다!
        </p>
      </div>
      <img className={styles.key} src={rotateKeySvg} alt="열쇠" />
      <MoveButton
        align="right"
        label="Start"
        onClick={() => history.push('/')}
      />
    </PaperLayout>
  )
}

export default ChecklistGuide
