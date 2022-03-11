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
  color: var(--text);
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
  color: var(--text);

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
    color: var(--text);
    font-size: 1.2rem;
    font-weight: 500;
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

    & input[type="radio"] {
      appearance: none;
      width: 12px;
      height: 12px;
      border: 2px solid var(--text);
      border-radius: 50%;
      cursor: pointer;
    }

    & input[type="radio"]:checked {
      border-color: var(--primary);
      background-color: var(--primary);
    }
  }

  & span {
    padding-left: 10px;
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0;
  z-index: 50;
`;

export const ModalCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  height: 100%;
  border: 0;
  background-color: rgb(246, 246, 246);
`;

export const ModalContentWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

export const ModalTitle = styled.h1`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  color: #5b5555;
`;

export const ModalCloseBtn = styled.button`
  font-size: 2rem;
  float: left;
  position: absolute;
  right: 16px;
`;

export const modalBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 16px 0;
`;

export const ModalInputWrap = styled.div`
  padding: 8px 8px;
  display: flex;
  width: 90%;
  margin: auto;
  border: #e3e3e3 1px solid;
`;

export const InputIcon = styled.span`
  font-size: 2rem;
  color: #e3e3e3;
`;

export const ModalInput = styled.input`
  width: 80%;
  outline: none;
  border: none;
  padding-left: 8px;
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 400px;
  overflow: scroll;
  overflow-x: hidden;
`;

export const SearchNotice = styled.span`
  width: 90%;
  margin: auto;
  text-align: center;
`;

export const AddressNotice = styled.div`
  background-color: rgb(246, 246, 246);
  padding: 20px;

  & span {
    display: block;
    text-align: left;
    color: #5b5555;
  }
`;

export const AddrItemWrap = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
`;
export const RoadAddrWrap = styled.p`
  width: 80%;
`;

export const RoadAddr = styled.p`
  font-weight: 600;
  padding-left: 3px;
  line-height: 20px;
  margin-bottom: 5px;
  font-size: 1.3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #5b5555;
`;

export const JibunWrap = styled.div`
  display: flex;
`;

export const JibunBadge = styled.div`
  background-color: rgb(246, 246, 246);
  border-radius: 10px;
  padding: 0px 4px;
`;

export const Jibun = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 10px;
`;

export const ZipNo = styled.span`
  display: inline-block;
  color: #5b5555;
  padding-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
`;
