import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'

function MainDescription() {
  return (
    <div className={cls(styles.mainDescription)}>
      <h3 className={cls(styles.descriptionTitle)}>
        아아, 안녕하십니까? 예비 임차인님!
      </h3>
      <p className={cls(styles.description)}>
        전세 집을 알아보고 있으신가요? 저는 예비 임차인님이 안전한 선택을 하도록
        도와주는 전세박사 입니다.
        <br />
        상상해보세요. ‘빚 1억과 함께 살고있는 집에서 쫓겨난다.’ 끔찍하죠?
        전세박사와 함께 최악의 상황은 모면합시다!
      </p>
    </div>
  )
}

export default MainDescription
