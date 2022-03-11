import React, { useState } from "react";
import { BiSearchAlt2, BiX } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";

import * as S from "./style";

type RegisterAddressProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function RegisterAddress({ setRoute }: RegisterAddressProps) {
  const [isAbleToSearch, setIsAbleToSearch] = useState(false);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState(null);

  const handleClick = () => {
    setIsAbleToSearch((prev) => !prev);
  };

  return (
    <div>
      <S.InfoContainer>
        <div>
          <AiFillQuestionCircle size={18} color="#1971c2" />
        </div>
        <span>
          케어코디 서비스는 현재 서울, 경기도, 인천, 부산 지역에서 이용이 가능합니다. 빠른 시일 내
          서비스 지역을 확대할 수 있도록 노력하겠습니다.
        </span>
      </S.InfoContainer>
      {address ? (
        <S.InputWrapper>
          <S.InputContainer>
            <BiSearchAlt2 className="searchIcon" size={15} />
            <span>{address}</span>
            <button type="button" onClick={handleClick}>
              재검색
            </button>
          </S.InputContainer>
        </S.InputWrapper>
      ) : (
        <S.DisplayWrapper onClick={handleClick}>
          <S.DisplayContainer>
            <BiSearchAlt2 className="searchIcon" size={15} />
            <span>주소 또는 건물명으로 검색</span>
          </S.DisplayContainer>
        </S.DisplayWrapper>
      )}
      <S.DetailWrapper>
        <label>
          <input placeholder="상세 주소를 입력해주세요" />
        </label>
      </S.DetailWrapper>
    </div>
  );
}

export default RegisterAddress;
