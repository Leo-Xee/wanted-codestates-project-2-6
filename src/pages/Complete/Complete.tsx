import React from "react";
import styled from "styled-components";

import { page } from "src/constant";
import { useApplicationDispatch } from "src/contexts/ApplicationContext";

type CompleteProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Complete({ setRoute }: CompleteProps) {
  const dispatch = useApplicationDispatch();

  const handleClick = () => {
    setRoute(page.HOME);
    dispatch({ type: "RESET" });
  };

  return (
    <Container>
      <Header>돌보미 신청하기</Header>
      <div>📱 신청이 완료되었습니다!</div>
      <p>
        신청하신 내용을 보고 케어코디님들이 지원할 예정입니다.
        <br />
        케어코디님들이 신청할 때 마다 앱이나 문자로 알림을 보내드립니다.
        <br /> 케어코디님의 지원 알림을 기다려주세요!
      </p>
      <EndButton type="button" onClick={handleClick}>
        끝내기
      </EndButton>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 328px;
  height: 548px;
  padding: 32px 0;
  margin: 0 auto;
  div {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #5b5555;
    margin-bottom: 8px;
  }
  p {
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7d7878;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 56px;
  margin: 0 auto 7%;
  font-weight: 700;
  font-size: 16px !important;
  color: #5b5555;
`;

const EndButton = styled.button`
  width: 71px;
  height: 48px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  padding: 14px 15px;
  margin: 32px auto;
  border-radius: 4px;
  border: 1px solid #e2e2e2;
`;

export default Complete;
