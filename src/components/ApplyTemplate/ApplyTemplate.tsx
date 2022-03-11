import React from "react";
import * as S from "./styles";

type ApplyTemplateProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

function ApplyTemplate({
  setRoute,
  step,
  setStep,
  disabled,
  setDisabled,
  children,
}: ApplyTemplateProps) {
  return (
    <>
      <S.Header setRoute={setRoute} />
      <S.StepIndicator step={step} />
      <S.Description step={step} />
      <S.Contents>{children}</S.Contents>
      <S.ButtonGroup
        step={step}
        setStep={setStep}
        setRoute={setRoute}
        disabled={disabled}
        setDisabled={setDisabled}
      />
    </>
  );
}

export default ApplyTemplate;
