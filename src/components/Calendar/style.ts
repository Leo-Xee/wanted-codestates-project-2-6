import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 5px 0px 16px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: lightgray;
  border: none;
  background: #f6f6f6;
  &:valid {
    font-weight: normal;
    color: black;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 10px);
  gap: 10px;
`;
export const Container = styled.div`
  width: 50%;
`;
