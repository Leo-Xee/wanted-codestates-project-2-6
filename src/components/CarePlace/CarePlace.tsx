import React, { useState } from "react";

import * as S from "./style";
import RadioBox from "./RadioBox";
import SelectBox from "./SelectBox";
import ButtonWithImg from "../ButtonWithEmoji";

function CareType() {
  const placeType = [
    { id: 1, emoji: "🏠", label: "자택" },
    { id: 2, emoji: "🏥", label: "병원" },
  ];
  const [selectPlace, setSelectPlace] = useState<number>(0);
  const [wantSurvice, setWantSurvice] = useState<boolean>(false);
  const [targetGender, setTargetGender] = useState<boolean>(true);
  const [careGender, setCareGender] = useState<boolean>(true);
  const [isDiagnosed, setIsDiagnosed] = useState<boolean>(false);

  return (
    <S.TypeWrapper>
      <S.ButtonGroup>
        {placeType.map((type) => (
          <ButtonWithImg
            key={type.id}
            isActive={selectPlace === type.id}
            emoji={type.emoji}
            label={type.label}
            onClick={() => {
              setSelectPlace(type.id);
              if (type.id === 2) {
                setWantSurvice(false);
              }
            }}
          />
        ))}
      </S.ButtonGroup>
      {selectPlace === 1 && (
        <>
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
              [방문요양]은 등급이 있는 어르신이 나라 지원금으로 저렴하게 돌봄 받는
              혜택이에요.신청서를 남기면 도와드릴게요!
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
                <input
                  type="text"
                  disabled={isDiagnosed}
                  placeholder={isDiagnosed ? "" : "직접입력"}
                />
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
        </>
      )}
    </S.TypeWrapper>
  );
}

export default CareType;
