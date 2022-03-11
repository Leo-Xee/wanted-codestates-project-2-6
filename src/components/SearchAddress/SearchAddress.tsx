import React from "react";
import * as S from "./styles";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchAddress: React.FC<Props> = ({ setModal }) => {
  return <S.WrapDiv>SearchAddress</S.WrapDiv>;
};

export default SearchAddress;
