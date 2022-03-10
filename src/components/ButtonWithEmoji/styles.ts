import styled, { css } from "styled-components";

export const ButtonBlock = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 24px;
  font-size: 1.4rem;
  font-weight: bold;
  border: 1px solid var(--outline);
  border-radius: 5px;

  .emoji {
    font-size: 4.8rem;
  }

  span {
    margin-top: 8px;
  }

  & + & {
    margin-left: 8px;
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--primary);
      border-color: var(--primary);
      color: white;
    `}
`;
