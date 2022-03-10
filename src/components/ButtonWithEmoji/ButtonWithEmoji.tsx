import React from "react";
import * as S from "./styles";

type ButtonWithEmojiProps = {
  isActive: boolean;
  label: string;
  emoji: string;
  onClick: () => void;
};

function ButtonWithEmoji({ isActive, label, emoji, onClick }: ButtonWithEmojiProps) {
  return (
    <S.ButtonBlock active={isActive} onClick={onClick}>
      <span className="emoji">{emoji}</span>
      <span className="label">{label}</span>
    </S.ButtonBlock>
  );
}

export default ButtonWithEmoji;
