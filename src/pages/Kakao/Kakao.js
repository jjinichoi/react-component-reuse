import React from "react";
import KakaoProduct from "../../components/KakaoProduct/KakaoProduct";
// import kakaoProduct
import "./Kakao.scss";

/**********************************************************
  
  현재는 카드 뷰 / 리스트 뷰가 구현되어 있지만,
  중복되는 구조가 반복되어서 코드가 불필요하게 길어진 것을 확인할 수 있습니다.
  
  오늘 배운 컴포넌트 재사용 개념을 활용해 반복되는 구조를 컴포넌트화하고
  props에 따라서 다른 UI를 보여줄 수 있도록 구현해 주세요!

  - props로 전달할 데이터를 mock data 혹은 상수 데이터를 담고 있는
    js 파일을 생성해서 관리해 주세요!
  - 컴포넌트를 분리하면 그에 따라 scss도 분리해 주세요!

***********************************************************/
const CARD_LIST = [
  {
    id: 1,
    img: "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    tag: "NEW",
    title: "촉촉함을 원해요",
    description:
      "재채기는 콜록 콜록 눈,코,입 모두 간질 간질. 이게 다 건조함 때문이라구! 건조함을 해결하러 온 꿀꿀꿀귀탱 가습기들, 구경해볼까요?",
  },
  {
    id: 2,
    img: "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa",
    tag: "Good",
    title: "통통미 폭발 구름 폭신 필로우",
    description:
      "통통하고 말랑 말랑한 너희에게 내 하루 시작과 끝에서 힐링을 부탁해!",
  },
  {
    id: 3,
    img: "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    tag: "Theme",
    title: "올 겨울엔 프렌즈랑 메리 화이트 크리스마스!",
    description:
      "올해 크리스마스엔 눈이 올까요? 안오면 어때요. 이미 프렌즈들이 내 마음에 하얀 눈을 내려주고 있는걸!",
  },
];

const Kakao = () => {
  return (
    <div className="kakao">
      {CARD_LIST.map((card) => (
        <article className="card" key={card.id}>
          <div>
            <img alt="card" src={card.img} />
          </div>
          <div className="cardMain">
            <div>
              <span className={card.tag.toLowerCase()}>{card.tag}</span>
            </div>
            <h3>{card.title}</h3>
            <div>
              <p>{card.description}</p>
            </div>
            <KakaoProduct tag={card.tag} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default Kakao;
