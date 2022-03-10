import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 30px;
  font-size: 12px;
  z-index: 15;

  & > * {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
  }
`;
export const SelectWindow = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  z-index: 15;
`;
export const SelectOptions = styled.div`
  padding-top: 30px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  z-index: 10;

  & > * {
    margin: 2px 0;
  }
`;
