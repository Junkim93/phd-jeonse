import React from 'react'
import styles from './index.module.scss'
import PaperLayout from '@components/layout/paper/index'
import authorSvg from '@assets/tiger-jquery.svg'

function Testament() {
  return (
    <PaperLayout theme="white" hasPadding>
      <h2 className={styles.title}>제작자의 유언</h2>
      <p className={styles.description}>
        안녕하세요, 전세박사의 제작자 <img src={authorSvg} alt="Tiger Jquery" />{' '}
        라고 합니다. 회사 프로젝트 말고 이렇게 사람들에게 공개하는 서비스를
        만드는 건 처음이네요. 갑자기 이런 서비스를 만들게 된 결정적인 계기가
        있었습니다.
      </p>
      <p className={styles.description}>
        6월 8일 전세집 건물에 강제 경매가 신청됐다는 사실을 알게됐습니다. 처음
        들었을 때는 어안이 벙벙했죠. 무슨 일이 일어났는지 체감하기가 어려웠어요.
        당장 등기부등본을 떼보고 전세집 경매와 관련된 여러가지 자료를
        찾아보았습니다. 검색을 거듭할수록 선명히 드러나는 것은 제 전세금 1억
        3천만원이 증발할 수도 있다는 사실이었습니다.
      </p>
      <p className={styles.description}>
        이후 스트레스의 연속이었어요. 부동산 중개업자의 말과 중기청 전세 대출에
        안도하고, 깔끔한 신축 빌라의 모습에 사리분별 못한 저에 대한 자책감도
        들었습니다. ‘근저당 확인 안했냐, 그런 물건에 왜 들어가냐, 너가 잘못한
        것이다’ 라고 얘기하는 사람들의 말도 뇌리에 꽂히더라구요. ‘아, 나는
        피해자도 아니고 가해자도 아니고 그냥 자선사업가, 모자른 놈, 그런건가?’
        하는 생각도 들었습니다.
      </p>
      <p className={styles.description}>법 공부도 무지하게 했습니다.</p>
      <p className={styles.description}>
        {' '}
        덕분에 한 가지 확실하게 체감했습니다. 어떤 일을 당하면 물질적,
        정신적으로 가장 큰 피해를 받는 것은 가해자가 아니라 피해자 라는
        사실이요. 법은 똑똑하고 돈 많은 사람의 편이었습니다. 무지하고 돈 없는
        사람은 법의 보호를 받기 힘들었어요.
      </p>
      <p className={styles.description}>
        다시는 저와 같은 피해자가 생겨나지 않았으면 좋겠습니다. 진심으로요.
      </p>
      <p className={styles.description}>
        전세를 계약할 때 낯설고 복잡해 보이는 용어가 많이 나와요. 공시지가,
        근저당, 공동담보, 경매에 넘어갔을 때 절차, 동시배당과 이시배당, 전세권,
        전세보증보험, 선순위와 후순위, 도시형 생활주택, 다세대와 다가구의 차이…
        나열하면 한도 끝도 없습니다. 사실 이런 부분을 공인중개사가 잘 인지하고
        설명해줘야 하는게 아닌가 하는 생각도 들지만, 현실은 그렇지 않더라구요.
        믿어야 하는 건 눈 앞에 놓인 종이뿐 이었습니다.
      </p>
      <p className={styles.description}>
        사실 이미 전세 사기와 관련한 여러 유튜브 영상과 블로그가 있지만, 정보가
        파편화 되어 있다는 느낌을 강하게 받았어요. 물론 스스로가 꼼꼼히
        확인해야하는 부분인 것은 맞습니다.
      </p>
      <p className={styles.description}>
        그래서 당장 전세 계약에 중요한 용어에 관해서 정확한 지식이 없어도, 저희
        서비스를 통해서 특정 집을 계약했을때 어떤 위험이 발생할 수 있는지 쉽게
        알려드리고 싶었습니다. 궁극적으로는 임차인들이 주거권리와 보증금을
        안정적으로 보장받는 사회가 됐으면 좋겠어요.
      </p>
      <p className={styles.description}>
        (+ 1억을 변제해야 할지도 몰라서 솔직히 광고수익도 기대하면서
        만들었습니다…ㅎㅎ)
      </p>
    </PaperLayout>
  )
}

export default Testament
