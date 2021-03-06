import React, { useEffect, useState } from "react";
import { BiSearchAlt2, BiX } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";
import axios from "axios";

import * as S from "./style";
import { useStaticState } from "src/contexts/StaticContext";
import { Address, useApplicationDispatch } from "src/contexts/ApplicationContext";

type RegisterAddressProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

type RespAddr = {
  results: {
    common: {
      errorMessage: string;
      countPerPage: string;
      totalCount: string;
      errorCode: string;
      currentPage: string;
    };
    juso: Addr[];
  };
};

type Addr = {
  admCd: string;
  bdKdcd: string;
  bdMgtSn: string;
  bdNm: string;
  buldMnnm: string;
  buldSlno: string;
  detBdNmList: string;
  emdNm: string;
  emdNo: string;
  engAddr: string;
  jibunAddr: string;
  liNm: string;
  lnbrMnnm: string;
  lnbrSlno: string;
  mtYn: string;
  rn: string;
  rnMgtSn: string;
  roadAddr: string;
  roadAddrPart1: string;
  roadAddrPart2: string;
  sggNm: string;
  siNm: string;
  udrtYn: string;
  zipNo: string;
};

function RegisterAddress({ setRoute, setDisabled }: RegisterAddressProps) {
  const [address, setAddress] = useState<Addr[]>([]);
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [filterdAddr, setFilterdAddr] = useState<Address>();

  const [modalState, setModalState] = useState(false);
  const { covidTestTypes } = useStaticState();
  const [covidTest, setCovidTest] = useState<string | null>(null);
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (filterdAddr?.roadAddress && detailAddress && covidTest) {
      const tmpObj: Address = filterdAddr;
      tmpObj.addressDetail = detailAddress;
      dispatch({ type: "SET_ADDRESS", address: tmpObj });
      dispatch({ type: "SET_COVID_TEST_TYPE", covidTestType: covidTest });
      setDisabled(false);
    }
  }, [filterdAddr, detailAddress, covidTest]);

  const handleAddressClick = (value: Addr) => {
    const filterdObj: Address = {
      addressDetail: "",
      jibunAddress: value.jibunAddr,
      liName: value.lnbrMnnm,
      locationCode: value.emdNo,
      roadCode: value.zipNo,
      myundongName: value.emdNm,
      roadAddress: value.roadAddr,
      sidoName: value.siNm,
      sigunguName: value.sggNm,
    };

    setFilterdAddr(filterdObj);
    setModalState(false);
  };

  async function getAddress(SearchValue: string) {
    try {
      const response = await axios.get<RespAddr>("https://www.juso.go.kr/addrlink/addrLinkApi.do", {
        params: {
          currentPage: 1,
          countPerPage: 10,
          keyword: SearchValue,
          confmKey: "devU01TX0FVVEgyMDIyMDEyODIzMjIyNjExMjE5NjE=",
          resultType: "json",
        },
      });
      if (response.data) {
        setAddress(response.data.results.juso);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // modal address search
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    void getAddress(e.target.value);
  };

  const handleModalClose = () => {
    setModalState(false);
    setAddress([]);
  };

  return (
    <div>
      {modalState && (
        <>
          <S.ModalWrap>
            <S.ModalCard>
              <S.ModalContentWrap>
                <S.ModalHeader>
                  <S.ModalTitle>????????????</S.ModalTitle>
                  <S.ModalCloseBtn type="button" onClick={handleModalClose}>
                    <BiX />
                  </S.ModalCloseBtn>
                </S.ModalHeader>

                <S.ModalInputWrap>
                  <S.InputIcon>
                    <BiSearchAlt2 className="searchIcon" />
                  </S.InputIcon>
                  <S.ModalInput
                    placeholder="?????? ?????? ??????????????? ??????"
                    onChange={(e) => handleAddressChange(e)}
                  ></S.ModalInput>
                </S.ModalInputWrap>

                <S.AddressContent>
                  {address !== null && address.length !== 0 ? (
                    address.map((value: Addr, idx: number) => (
                      <S.AddrItemWrap key={idx} onClick={() => handleAddressClick(value)}>
                        <S.RoadAddrWrap>
                          <S.RoadAddr>{value.roadAddr}</S.RoadAddr>
                          <S.JibunWrap>
                            <S.JibunBadge>
                              <span>??????</span>
                            </S.JibunBadge>
                            <S.RoadAddrWrap>
                              <S.Jibun>{value.jibunAddr}</S.Jibun>
                            </S.RoadAddrWrap>
                          </S.JibunWrap>
                        </S.RoadAddrWrap>
                        <div>
                          <S.ZipNo>{value.zipNo}</S.ZipNo>
                        </div>
                      </S.AddrItemWrap>
                    ))
                  ) : (
                    <S.SearchNotice>
                      ??????????????? ????????? ????????? ???????????? ?????? ??????????????? ????????? ?????? ??? ??????????????????.
                      <br />
                      ???) ?????????, ????????? 432??????
                    </S.SearchNotice>
                  )}
                </S.AddressContent>

                <S.AddressNotice>
                  <span>
                    ?? ???????????? ?????? ??? ??????????????? ????????? ??????????????????. ??????????????? ?????? ?????? ?????????
                    ????????? ??????????????????. <br />
                    ?? 2016??? 8??? 1???????????? 5?????? ???????????? ????????? ??????????????????. <br />
                    ??????????????? + 5?????? ??????????????? ??????????????? ????????? ????????? ???????????? ????????? ?????????
                    ????????????.
                  </span>
                </S.AddressNotice>
              </S.ModalContentWrap>
            </S.ModalCard>
          </S.ModalWrap>
          <S.modalBackground></S.modalBackground>
        </>
      )}
      <S.InfoContainer>
        <div>
          <AiFillQuestionCircle size={18} color="#1971c2" />
        </div>
        <span>
          ???????????? ???????????? ?????? ??????, ?????????, ??????, ?????? ???????????? ????????? ???????????????. ?????? ?????? ???
          ????????? ????????? ????????? ??? ????????? ?????????????????????.
        </span>
      </S.InfoContainer>
      {filterdAddr?.roadAddress ? (
        <S.InputWrapper>
          <S.InputContainer>
            <BiSearchAlt2 className="searchIcon" size={15} />
            <span>{filterdAddr.roadAddress}</span>
            <button type="button" onClick={() => setModalState(true)}>
              ?????????
            </button>
          </S.InputContainer>
        </S.InputWrapper>
      ) : (
        <S.DisplayWrapper onClick={() => setModalState(true)}>
          <S.DisplayContainer>
            <BiSearchAlt2 className="searchIcon" size={15} />
            <span>?????? ?????? ??????????????? ??????</span>
          </S.DisplayContainer>
        </S.DisplayWrapper>
      )}
      <S.DetailWrapper>
        <label>
          <input
            placeholder="?????? ????????? ??????????????????"
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </label>
      </S.DetailWrapper>
      <S.CovidContainer>
        <h2>????????? ????????? ????????????????</h2>
        <ul>
          {covidTestTypes.map((v, idx) => (
            <li key={idx} onClick={() => setCovidTest(v.value)}>
              <label htmlFor={`radioBtn ${idx}`} />
              <input id={`radioBtn ${idx}`} type="radio" checked={covidTest === v.value} readOnly />
              <span>{v.text}</span>
            </li>
          ))}
        </ul>
      </S.CovidContainer>
    </div>
  );
}

export default RegisterAddress;
