import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const DetailContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 16px 0px #0000000d;
  margin-bottom: 32px;
  border-radius: 8px;
`;

export const PhoneNumber = styled.input`
  width: 328px;
  height: 48px;
  font-size: 14px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  padding-left: 16px;
  margin-bottom: 62px;
  ::placeholder {
    color: #b6b3b3;
  }
`;
