import React, { Dispatch, SetStateAction, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import Options from "../Options";
import OptionPortals from "../Options/OptionPortals";
import * as S from "./style";
import { useStaticState } from "src/contexts/StaticContext";
import { useApplicationState } from "src/contexts/ApplicationContext";

interface Time {
  isToday: boolean;
  visitHour: string;
  setVisitHour: Dispatch<SetStateAction<string>>;
  careHours: string;
  setCareHours: Dispatch<SetStateAction<string>>;
}
function Time({ isToday, visitHour, setVisitHour, careHours, setCareHours }: Time) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const [options, setOptions] = useState([""]);
  const visitHourList = [
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
    "오전 10시",
    "오전 11시",
    "오후 12시",
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
  ];

  const staticState = useStaticState();
  const applicationState = useApplicationState();

  const handleVisitHour = () => {
    setShow(true);
    setTitle("돌봄 시작 시간 선택");
    if (isToday) {
      const now = new Date().getHours();
      const start = now + staticState.policy.minBeforeFirstScheduleVisitHour;
      const result = visitHourList.slice(start);
      setOptions(result);
    } else {
      setOptions(visitHourList);
    }
  };

  const handleCareHours = () => {
    if (applicationState.workType === "24시간 상주") return;
    setShow(true);
    setTitle("하루 돌봄 시간 선택");
    const hours = staticState.careHours.map((item) => item.text);
    setOptions(hours);
  };

  return (
    <div>
      <S.Wrapper>
        <S.SelectBoxName>돌봄 시작 시간</S.SelectBoxName>
        <S.SelectBox value={visitHour} onClick={handleVisitHour} readOnly />
        <S.Icon onClick={handleVisitHour}>
          <IoIosArrowDown />
        </S.Icon>
      </S.Wrapper>
      <S.Wrapper>
        <S.SelectBoxName>하루 돌봄 시간</S.SelectBoxName>
        <S.SelectBox
          disabled={applicationState.workType === "24시간 상주"}
          value={applicationState.workType === "24시간 상주" ? "24시간" : careHours}
          onClick={handleCareHours}
          readOnly
        />
        <S.Icon onClick={handleCareHours}>
          <IoIosArrowDown />
        </S.Icon>
      </S.Wrapper>
      {show && (
        <OptionPortals>
          <Options
            title={title}
            options={options}
            setVisitHour={setVisitHour}
            setCareHours={setCareHours}
            show={show}
            setShow={setShow}
          />
        </OptionPortals>
      )}
    </div>
  );
}

export default Time;
