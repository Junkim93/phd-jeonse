import React from 'react'
import styles from './index.module.scss'
import cls from 'classnames'

function TenCommandments() {
  return (
    <ul className={cls(styles.ten_commandments)}>
      <li>
        <span className="medium">01. </span>
        쫄지 않는다. 위축 X, 소심 X, <span className="bold">당당 YES</span>
      </li>
      <li>
        <span className="medium">02. </span>
        혹하는 마음으로{' '}
        <span className="highlight bold">
          당일 계약을 하거나 서두르지 않는다.
        </span>
      </li>
      <li>
        <span className="medium">03. </span>
        부동산 중개인, 임대인과의{' '}
        <span className="highlight">모든 이야기는 녹음</span>한다
      </li>
      <li>
        <span className="medium">04. </span>
        <span className="highlight bold">
          계약서, 등기부등본, 중개대상물 확인 설명서
        </span>
        를 꼼꼼히 확인한다.
      </li>
      <li>
        <span className="medium">05. </span>
        궁금한 점이나 찜찜한 부분은 반드시 물어본다.
      </li>
      <li>
        <span className="medium">06. </span>
        임대인이나 공인중개사의 말만 믿지 말고,{' '}
        <span className="highlight bold">꼭 계약서에 기재</span>한다.
      </li>
      <li>
        <span className="medium">07. </span>
        “인터넷에서 말하는 건 다 어쩌구저쩌구” 하며 전세박사를 모함하는
        공인중개사는 피한다.
      </li>
      <li>
        <span className="medium">08. </span>
        안전하고 마음에 드는 물건이 쉽게 나오지 않더라도 포기하지 않는다.
      </li>
      <li>
        <span className="medium">09. </span>
        정말 없다면 차라리 월세나 행복주택, 공공임대에 산다.
      </li>
      <li>
        <span className="medium">10. </span>
        <span className="bold">
          전세박사의 <span className="highlight">전세계약서 체크리스트</span>를
          통해 해당 매물의 안전도를 꼭 확인한다.
        </span>
      </li>
    </ul>
  )
}

export default TenCommandments
