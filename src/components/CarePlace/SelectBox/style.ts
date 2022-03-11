import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 40px;
  margin-top: 10px;
  font-size: 12px;
  & > * {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px;
    font-size: 12px;
  }
`;
export const SelectWindow = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  z-index: 15;
`;
export const SelectOptions = styled.div`
  height: 200px;
  padding-bottom: 40px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
  overflow: auto;
  z-index: 10;

  & > * {
    padding: 8px;
    border-bottom: 1px solid lightgray;
  }
`;
