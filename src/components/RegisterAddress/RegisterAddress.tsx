import React, { useContext, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";

import * as S from "./style";
import { State, useStaticState } from "src/contexts/StaticContext";
import { log } from "console";
import { useApplicationState } from "src/contexts/ApplicationContext";

type RegisterAddressProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

function RegisterAddress({ setRoute, setDisabled }: RegisterAddressProps) {
  const [address, setAddress] = useState("skdfjsdklfjsdklfjsdfksjdflksdjfsdfsdsdsss");
  const [detailAddress, setDetailAddress] = useState(null);
  const data = useApplicationState();
  const { covidTestTypes } = useStaticState();
  const [covidTest, setCovidTest] = useState<string | null>(null);
  console.log(covidTestTypes);

  const handleClick = () => {
    // 주소 검색 모달 실행
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
      <S.CovidContainer>
        <h2>코로나 검사가 필요한가요?</h2>
        <ul>
          {covidTestTypes.map((v, idx) => (
            <li key={idx} onClick={() => setCovidTest(v.value)}>
              <label htmlFor={`radioBtn ${idx}`}>
                <input
                  id={`radioBtn ${idx}`}
                  type="radio"
                  checked={covidTest === v.value}
                  readOnly
                />
              </label>
              <span>{v.text}</span>
            </li>
          ))}
        </ul>
      </S.CovidContainer>
    </div>
  );
}

export default RegisterAddress;
