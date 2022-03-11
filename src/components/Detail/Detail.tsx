import React from "react";
import * as S from "./style";
import { useApplicationState } from "src/contexts/ApplicationContext";

function Detail() {
  const applicationState = useApplicationState(); // context.api
  console.log(applicationState.workType);

  const careType = "full";
  const careTime = { startTime: "11", careTime: "4시간" };
  const address = {
    roadAddr: "서울특별시 강남구 테헤란로 428(대치동, 테헤란로 대우 아이빌)",
    jibunAddr: "서울특별시 강남구 대치동 891-6 테헤란로 대우 아이빌",
    userAddr: "케어닥 주공아파트 101동 2302호",
  };
  return (
    <S.DetailContainer>
      <S.AppDetail>신청 내역</S.AppDetail>
      <S.CareType>
        <h5>돌봄 유형</h5>
        {careType === "full" ? <div>🌞 &nbsp;24시간 상주</div> : <div>⏰ &nbsp;시간제 돌봄</div>}
      </S.CareType>
      <S.CareShedule>
        <h5>돌봄 일정</h5>
        <div>
          <div>2022년 1월 12일 ~ 22년 1월 23일</div>
          <div>{`${careTime.startTime}부터`}</div>
          <div>{careTime.careTime}</div>
        </div>
      </S.CareShedule>
      <S.Address>
        <h5>돌봄 주소</h5>
        <div>{address.roadAddr}</div>
        <S.DetailAddress>
          <p>지번</p>&nbsp;
          <span>{address.jibunAddr}</span>
        </S.DetailAddress>
        <div>
          <span>{address.userAddr}</span>
        </div>
      </S.Address>
    </S.DetailContainer>
  );
}

export default Detail;
