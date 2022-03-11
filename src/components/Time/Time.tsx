import axios from "axios";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import Options from "../Options";
import OptionPortals from "../Options/OptionPortals";
import * as S from "./style";

function Time() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [startValue, setStartValue] = useState("선택");
  const [oneDayHour, setOneDayHour] = useState("선택");
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const handleStartTime = () => {
    setShow(true);
    setTitle("돌봄 시작 시간 선택");
  };

  const handleOneDayHour = () => {
    setShow(true);
    setTitle("하루 돌봄 시간 선택");
  };

  return (
    <div>
      <S.Wrapper>
        <S.SelectBoxName>돌봄 시작 시간</S.SelectBoxName>
        <S.SelectBox value={startValue} onClick={handleStartTime} readOnly />
        <S.Icon>
          <IoIosArrowDown />
        </S.Icon>
      </S.Wrapper>
      <S.Wrapper>
        <S.SelectBoxName>하루 돌봄 시간</S.SelectBoxName>
        <S.SelectBox value={oneDayHour} onClick={handleOneDayHour} readOnly />
        <S.Icon>
          <IoIosArrowDown />
        </S.Icon>
      </S.Wrapper>
      {show && (
        <OptionPortals>
          <Options title={title} options={options} show={show} setShow={setShow} />
        </OptionPortals>
      )}
    </div>
  );
}

export default Time;
