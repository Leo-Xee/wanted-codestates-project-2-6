import React from "react";
import { IoMdClose } from "react-icons/io";

import * as S from "./style";

type OptionsType = {
  title: string;
  options: string[];
  setVisitHour: React.Dispatch<React.SetStateAction<string>>;
  setCareHours: React.Dispatch<React.SetStateAction<string>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Options({ title, options, setVisitHour, setCareHours, show, setShow }: OptionsType) {
  return (
    <>
      <S.Background onClick={() => setShow(false)} />
      <S.Options show={show}>
        <S.CloseBtn>
          <IoMdClose onClick={() => setShow(false)} />
        </S.CloseBtn>
        <S.Title>{title}</S.Title>
        <S.OptionsWrapper>
          {options.map((option) => (
            <S.Option
              key={option}
              onClick={() => {
                title === "돌봄 시작 시간 선택" && setVisitHour(option);
                title === "하루 돌봄 시간 선택" && setCareHours(option);
                setShow(false);
              }}
            >
              {option}
            </S.Option>
          ))}
        </S.OptionsWrapper>
      </S.Options>
    </>
  );
}

export default Options;
