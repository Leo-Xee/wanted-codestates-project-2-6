import React from "react";
import * as S from "./style";
import { useApplicationState } from "src/contexts/ApplicationContext";

function Detail() {
  const data = useApplicationState(); // context.api
  // console.log(data);

  return (
    <S.DetailContainer>
      <S.AppDetail>신청 내역</S.AppDetail>
      <S.CareType>
        <h5>돌봄 유형</h5>
        <div>{data.workType}</div>
      </S.CareType>
      <S.CareShedule>
        <h5>돌봄 일정</h5>
        <div>
          <div>{`${data.schedule.startDate} ~ ${data.schedule.endDate}일`}</div>
          <div>{`${data.schedule.visitTime}부터`}</div>
          <div>{data.schedule.hour}시간</div>
        </div>
      </S.CareShedule>
      <S.Address>
        <h5>돌봄 주소</h5>
        <div>{data.address.roadAddress}</div>
        <S.DetailAddress>
          <p>지번</p>&nbsp;
          <span>{data.address.jibunAddress}</span>
        </S.DetailAddress>
        <div>
          <span>{data.address.addressDetail}</span>
        </div>
      </S.Address>
    </S.DetailContainer>
  );
}

export default Detail;
