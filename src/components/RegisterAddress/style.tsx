import styled from "styled-components";

export const DefaultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: 1px solid #dee2e6;
  border-radius: 5px;

  & input,
  & span {
    outline: none;
    border: none;
    font-size: 1.4rem;
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
  border-radius: 5px;

  & span {
    width: 95%;
    padding-left: 5px;
  }
`;

export const InputWrapper = styled(DefaultWrapper)`
  background-color: #f1f3f5;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  & span {
    padding-left: 10px;
    width: 240px;
    color: #ced4da;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & button {
    background: var(--primary);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    padding: 14px;
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

export const CovidContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;

  & h2 {
    margin-bottom: 10px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
  }

  & ul li {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 40px;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    cursor: pointer;

    & span {
      padding-left: 10px;
    }
  }
`;
