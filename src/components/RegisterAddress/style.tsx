import styled from "styled-components";

export const DefaultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: 1px solid #dee2e6;

  & input {
    outline: none;
    border: none;
    font-size: 1.2rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 16px;
  width: 100%;
  color: #5b5555;
  font-weight: 500;
  background-color: #f4f7ff;
  border-radius: 4px;

  & span {
    width: 95%;
    padding-left: 5px;
  }
`;

export const InputWrapper = styled(DefaultWrapper)``;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  & label input {
    padding-left: 10px;
    width: 260px;
  }

  & button {
    padding: 5px;
  }
`;

export const DisplayWrapper = styled(DefaultWrapper)`
  cursor: pointer;
`;

export const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  color: #5b5555;

  & span {
    padding-left: 10px;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const DetailWrapper = styled(DefaultWrapper)`
  display: flex;
  justify-content: flex-start;

  & input {
    padding-left: 20px;
    width: 260px;
  }
`;
