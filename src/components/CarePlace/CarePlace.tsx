import React, { useState } from "react";

import * as S from "./style";
import RadioBox from "./RadioBox";
import SelectBox from "./SelectBox";

function CareType() {
  const longtermLevel = [
    "등급 모름",
    "1등급",
    "2등급",
    "3등급",
    "4등급",
    "5등급",
    "인지지원등급",
    "등급신청 관심있음",
    "등급신청 중",
    "등급 없음",
  ];
  const [wantSurvice, setWantSurvice] = useState<boolean>(true);
  const [targetGender, setTargetGender] = useState<boolean>(true);
  const [careGender, setCareGender] = useState<boolean>(true);
  const [isDiagnosed, setIsDiagnosed] = useState<boolean>(false);

  return (
    <S.TypeWrapper>
      <S.TypesubTitle>방문요양 서비스를 원하시나요?</S.TypesubTitle>
      <RadioBox
        radioName={"wantSurvice"}
        option1={{ id: "positive", value: "네, 원해요" }}
        option2={{ id: "negative", value: "아니요, 원하지 않아요" }}
        setOptions={setWantSurvice}
      />
      <S.TypeNotice>
        <S.QIcons />
        <p>
          [방문요양]은 등급이 있는 어르신이 나라 지원금으로 저렴하게 돌봄 받는 혜택이에요.신청서를
          남기면 도와드릴게요!
        </p>
      </S.TypeNotice>

      {wantSurvice && (
        <S.TypeAdditionalInfo>
          <S.TypesubTitle>방문 요양 추가 정보 입력</S.TypesubTitle>

          <hr />

          <S.TypesubTitle>어르신 성별</S.TypesubTitle>
          <RadioBox
            radioName={"targetGender"}
            option1={{ id: "targetMale", value: "남성" }}
            option2={{ id: "targetFemale", value: "여성" }}
            setOptions={setTargetGender}
          />

          <S.TypesubTitle>어르신 진단명</S.TypesubTitle>
          <S.TypeDiagnose>
            <input type="text" disabled={isDiagnosed} placeholder={isDiagnosed ? "" : "직접입력"} />
            <S.FormWrapper>
              <S.CheckBox id="diagnosis" onChange={() => setIsDiagnosed(!isDiagnosed)} />
              <label htmlFor="diagnosis">진단명 없음</label>
            </S.FormWrapper>
          </S.TypeDiagnose>
          <S.TypesubTitle>장기요양등급</S.TypesubTitle>
          <SelectBox />

          <S.TypesubTitle>선호 간병인 성별</S.TypesubTitle>
          <RadioBox
            radioName={"careGender"}
            option1={{ id: "careMale", value: "남성" }}
            option2={{ id: "careFemale", value: "여성" }}
            setOptions={setCareGender}
          />
        </S.TypeAdditionalInfo>
      )}
    </S.TypeWrapper>
  );
}

export default CareType;
