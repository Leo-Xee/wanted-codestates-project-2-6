import React from "react";
import { IoMdClose } from "react-icons/io";

import * as S from "./style";

type OptionsType = {
  title: string;
  options: string[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Options({ title, options, show, setShow }: OptionsType) {
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
            <S.Option key={option}>{option}</S.Option>
          ))}
        </S.OptionsWrapper>
      </S.Options>
    </>
  );
}

export default Options;
