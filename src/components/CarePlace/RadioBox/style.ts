import styled from "styled-components";

export const RadioBox = styled.div`
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  &,
  div {
    display: flex;
    align-items: center;
  }

  div {
    width: 49%;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    * {
      margin-right: 5px;
    }
  }
  label {
    cursor: pointer;
    width: calc(100% - 13px);
  }
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  --active: #fff;
  --active-inner: #ff8450;
  --border: #c4c4c4;
  --active-border: #ff8450;
  --background: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 13px;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--b, var(--background));
  border-radius: 50%;
  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
  }
  &:not(.switch) {
    width: 13px;
    &:after {
      opacity: var(--o, 0);
    }
    &:checked {
      --o: 1;
      border: 1px solid var(--active-border);
    }
  }
  &:after {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--active-inner);
    transform: scale(var(--s, 0.7));
  }
  &:checked {
    --s: 0.7;
    border: 1px solid var(--active-border);
  }
`;
