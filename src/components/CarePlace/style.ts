import styled from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";

export const TypeWrapper = styled.div`
  & > * {
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
`;

export const TypesubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const TypeNotice = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: rgb(242, 245, 255);

  p {
    width: 93%;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const QIcons = styled(AiFillQuestionCircle)`
  width: 7%;
  margin-right: 5px;
  font-size: 22px;
  color: rgb(52, 83, 232);
`;

export const TypeAdditionalInfo = styled.div`
  margin-top: 10px;
  & > * {
    margin-top: 10px;
  }
`;

export const TypeDiagnose = styled.div`
  & > * {
    margin-bottom: 10px;
  }
  & > input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 12px;

    &:focus {
      outline: none;
    }
  }
`;

export const FormWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  display: flex;
  align-items: center;

  * {
    font-size: 12px;
    margin-right: 5px;
  }
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })``;
