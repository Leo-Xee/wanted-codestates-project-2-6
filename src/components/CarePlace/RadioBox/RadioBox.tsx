import React from "react";

import * as S from "./style";

type Option = {
  id: string;
  value: string;
};
interface Props {
  radioName: string;
  option1: Option;
  option2: Option;
  setOptions: React.Dispatch<React.SetStateAction<number>>;
}

function RadioBox({ radioName, option1, option2, setOptions }: Props) {
  return (
    <S.RadioBox>
      <div>
        <S.RadioInput
          name={radioName}
          type="radio"
          id={option1.id}
          onChange={() => setOptions(1)}
        />
        <label htmlFor={option1.id}>{option1.value}</label>
      </div>
      <div>
        <S.RadioInput
          name={radioName}
          type="radio"
          id={option2.id}
          onChange={() => setOptions(2)}
        />
        <label htmlFor={option2.id}>{option2.value}</label>
      </div>
    </S.RadioBox>
  );
}

export default RadioBox;
