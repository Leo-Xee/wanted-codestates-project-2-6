import React, { useState } from "react";
import * as S from "./styles";
import ButtonWithEmoji from "../ButtonWithEmoji";
import { useApplicationState, useApplicationDispatch } from "src/contexts/ApplicationContext";

const typeData = [
  { id: 1, emoji: "🌞", label: "24시간 상주" },
  { id: 2, emoji: "⏰", label: "시간제 돌봄" },
];

function CareType({ setDisabled }: { setDisabled: React.Dispatch<React.SetStateAction<boolean>> }) {
  // const [selectedType, setSelectedType] = useState(0);
  const state = useApplicationState();
  const dispatch = useApplicationDispatch();

  return (
    <S.ButtonGroup>
      {typeData.map((type) => (
        <ButtonWithEmoji
          key={type.id}
          isActive={state.workType === type.label}
          emoji={type.emoji}
          label={type.label}
          onClick={() => {
            // setSelectedType(type.id);
            dispatch({ type: "SET_WORK_TYPE", workType: type.label });
            setDisabled(false);
          }}
        />
      ))}
    </S.ButtonGroup>
  );
}

export default CareType;
