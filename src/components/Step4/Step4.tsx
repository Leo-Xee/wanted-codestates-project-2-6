import React from "react";
import * as S from "./style";
import Detail from "../Detail/Detail";

function Step4() {
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
    //str_text.replace(/찾을 문자열/gi, "변경할 문자열")
    const onlyNumber = value.replace(/[^0-9]/g, "");
    if (phoneNumber.length > 10) return null;
    setPhoneNumber(onlyNumber);
  };
  return (
    <>
      <S.Container>
        <S.DetailContainer>
          <Detail />
        </S.DetailContainer>
        <S.PhoneNumber
          type="text"
          placeholder="전화번호를 입력해주세요 (11자리의 숫자)"
          onChange={hadleChange}
          value={phoneNumber}
        />
      </S.Container>
    </>
  );
}

export default Step4;
