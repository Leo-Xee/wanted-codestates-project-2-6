import React, { useState } from "react";
import * as S from "./style";

const Top = () => {
  const [pickedStartDate, setPickedStartDate] = useState<string | undefined>(undefined);
  const [pickedEndDate, setPickedEndDate] = useState<string | undefined>(undefined);

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
export default Top;
