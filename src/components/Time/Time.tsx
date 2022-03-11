import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import Options from "../Options";
import OptionPortals from "../Options/OptionPortals";
import * as S from "./style";
import { useStaticState } from "src/contexts/StaticContext";

function Time() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [startValue, setStartValue] = useState("선택");
  const [oneDayHour, setOneDayHour] = useState("선택");
  const [options, setOptions] = useState([""]);
  const [visitHour, setVisitHour] = useState([
    "오전 12시",
    "오전 1시",
    "오전 2시",
    "오전 3시",
    "오전 4시",
    "오전 5시",
    "오전 6시",
    "오전 7시",
    "오전 8시",
    "오전 9시",
    "오전 10 시",
    "오전 11시",
    "오후 12 시",
    "오후 1시",
    "오후 2시",
    "오후 3시",
    "오후 4시",
    "오후 5시",
    "오후 6시",
    "오후 7시",
    "오후 8시",
    "오후 9시",
    "오후 10시",
    "오후 11시",
  ]);

  const careHours = useStaticState().careHours.map((item) => item.text);

  const setVisitHourOptions = () => {
    const now = new Date().getHours();
    const start = now + useStaticState().policy.minBeforeFirstScheduleVisitHour;
    const result = [...visitHour].slice(start);
    setVisitHour(result);
  };

  const handleStartTime = () => {
    setShow(true);
    setTitle("돌봄 시작 시간 선택");
    // setVisitHourOptions();
    setOptions(visitHour);
  };

  const handleOneDayHour = () => {
    setShow(true);
    setTitle("하루 돌봄 시간 선택");
    setOptions(careHours);
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
          <Options
            title={title}
            options={options}
            setStartValue={setStartValue}
            setOneDayHour={setOneDayHour}
            show={show}
            setShow={setShow}
          />
        </OptionPortals>
      )}
    </div>
  );
}

export default Time;
