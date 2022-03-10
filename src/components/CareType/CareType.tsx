import React, { useState } from "react";
import * as S from "./styles";
import ButtonWithImg from "../ButtonWithEmoji";

const typeData = [
  { id: 1, emoji: "🌞", label: "24시간 상주" },
  { id: 2, emoji: "⏰", label: "시간제 돌봄" },
];

function CareType() {
  const [selectedType, setSelectedType] = useState(0);
  return (
    <S.ButtonGroup>
      {typeData.map((type) => (
        <ButtonWithImg
          key={type.id}
          isActive={selectedType === type.id}
          emoji={type.emoji}
          label={type.label}
          onClick={() => setSelectedType(type.id)}
        />
      ))}
    </S.ButtonGroup>
  );
}

export default CareType;
