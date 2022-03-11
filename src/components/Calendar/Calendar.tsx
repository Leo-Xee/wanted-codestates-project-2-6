import React, { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Calendar {
  setPickedEndDate: Dispatch<SetStateAction<string>>;
  setPickedStartDate: Dispatch<SetStateAction<string>>;
  pickedStartDate: string;
  pickedEndDate: string;
}
const Calendar = ({
  setPickedEndDate,
  setPickedStartDate,
  pickedStartDate,
  pickedEndDate,
}: Calendar) => {
  return (
    <>
      <S.H3>시작일</S.H3>
      <S.InpWrapper>
        <S.Input
          type="date"
          value={pickedStartDate}
          onChange={(e) => setPickedStartDate(e.target.value)}
        />
      </S.InpWrapper>
      <S.H3>종료일</S.H3>
      <S.InpWrapper>
        <S.Input
          type="date"
          value={pickedEndDate}
          onChange={(e) => setPickedEndDate(e.target.value)}
        />
      </S.InpWrapper>
    </>
  );
};
export default Calendar;
