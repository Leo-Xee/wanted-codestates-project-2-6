import React, { useState } from "react";
import { BiSearchAlt2, BiX } from "react-icons/bi";

import * as S from "./style";

type RegisterAddressProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function RegisterAddress({ setRoute }: RegisterAddressProps) {
  const [isAbleToSearch, setIsAbleToSearch] = useState(false);

  const handleClick = () => {
    setIsAbleToSearch((prev) => !prev);
  };

  return (
    <div>
      {isAbleToSearch ? (
        <S.InputWrapper>
          <S.InputContainer>
            <BiSearchAlt2 className="searchIcon" size={15} />
            <label>
              <input placeholder="주소를 검색해주세요" />
            </label>
            <button type="button" onClick={handleClick}>
              <BiX size={20} />
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
