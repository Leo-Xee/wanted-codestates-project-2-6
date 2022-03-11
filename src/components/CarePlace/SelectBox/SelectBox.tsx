import React, { useState } from "react";

import * as S from "./style";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

function SelectBox() {
  const longtermLevel = [
    "선택",
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
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [showSelectBox, setShowSelectBox] = useState<boolean>(false);
  return (
    <S.SelectWrapper>
      <S.SelectWindow
        onClick={() => {
          setShowSelectBox(!showSelectBox);
        }}
      >
        <div>{longtermLevel[selectIndex]}</div>
        <div>{showSelectBox ? <AiOutlineUp /> : <AiOutlineDown />}</div>
      </S.SelectWindow>
      {showSelectBox && (
        <S.SelectOptions>
          {longtermLevel.map((level, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectIndex(index);
                  setShowSelectBox(false);
                }}
              >
                {level}
              </div>
            );
          })}
        </S.SelectOptions>
      )}
    </S.SelectWrapper>
  );
}

export default SelectBox;
