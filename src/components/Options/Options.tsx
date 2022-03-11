import React from "react";
import { IoMdClose } from "react-icons/io";

import * as S from "./style";

type OptionsType = {
  title: string;
  options: string[];
  setStartValue: React.Dispatch<React.SetStateAction<string>>;
  setOneDayHour: React.Dispatch<React.SetStateAction<string>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Options({ title, options, setStartValue, setOneDayHour, show, setShow }: OptionsType) {
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
                setOneDayHour(option);
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
