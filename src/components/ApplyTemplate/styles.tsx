import React from "react";
import styled from "styled-components";

import { MdChevronLeft } from "react-icons/md";

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBack = styled.button`
  font-size: 2rem;
  float: left;
  position: absolute;
  left: 16px;
`;

const HeaderTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Header = ({
  setRoute,
}: {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <HeaderContainer>
      <HeaderBack onClick={() => setRoute("home")}>
        <MdChevronLeft />
      </HeaderBack>
      <HeaderTitle>돌보미 신청하기</HeaderTitle>
    </HeaderContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  padding: 0 16px;
  font-weight: bold;
`;

const StepLabel = styled.span`
  font-size: 1.6rem;
`;

const StepCount = styled.span`
  margin-left: 10px;
  font-size: 1.2rem;
  .currentStep {
    color: var(--primary);
  }
  .totalStep {
    color: var(--text-disabled);
  }
`;

const stepData = [
  { id: 0, stepName: "", stepDescription: "" },
  { id: 1, stepName: "돌봄 유형", stepDescription: "돌봄 유형을 설정해주세요" },
  { id: 2, stepName: "돌봄 스케줄", stepDescription: "돌봄 스케줄을 설정해주세요" },
  { id: 3, stepName: "돌봄 장소", stepDescription: "돌봄 장소는 어디신가요?" },
  { id: 4, stepName: "돌봄 주소", stepDescription: "돌봄 주소를 입력해주세요" },
  {
    id: 5,
    stepName: "신청 완료",
    stepDescription: "인증하신 휴대폰 번호로 케어코디 프로필을 받아보실 수 있어요 ☺️",
  },
];

export const StepIndicator = ({ step }: { step: number }) => {
  return (
    <StepContainer>
      <StepLabel>{stepData[step].stepName}</StepLabel>
      <StepCount>
        <span className="currentStep">{step}</span>
        <span className="totalStep"> / 5</span>
      </StepCount>
    </StepContainer>
  );
};

const DescriptionContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-top: 8px;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const Description = ({ step }: { step: number }) => {
  return <DescriptionContainer>{stepData[step].stepDescription}</DescriptionContainer>;
};

const ContentsContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  padding: 0 16px;
`;

export const Contents = ({ children }: { children: React.ReactNode }) => {
  return <ContentsContainer>{children}</ContentsContainer>;
};

const ButtonGroupContainer = styled.div`
  position: absolute;
  background: white;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  display: flex;
  font-size: 1.4rem;
  font-weight: bold;
`;

const NextButton = styled.button`
  background: var(--primary);
  color: white;
  border-radius: 5px;
  padding: 14px;
  flex: 3;

  &:disabled {
    background: var(--btn-disabled);
  }
`;

const PrevButton = styled.button`
  background: white;
  flex: 1;
  padding: 14px;
`;

export const ButtonGroup = ({
  step,
  setStep,
  setRoute,
  disabled,
  setDisabled,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ButtonGroupContainer>
      <PrevButton
        onClick={() => {
          if (step === 1) return;
          setDisabled(false);
          setStep((step) => step - 1);
        }}
      >
        이전
      </PrevButton>
      <NextButton
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          if (step === 5) {
            setRoute("complete");
          } else {
            setStep((step) => step + 1);
          }
        }}
      >
        다음
      </NextButton>
    </ButtonGroupContainer>
  );
};
