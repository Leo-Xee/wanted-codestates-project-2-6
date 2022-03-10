import React, { useState } from "react";
import ApplyTemplate from "../../components/ApplyTemplate";
import CareType from "../../components/CarePlace";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(1);

  return (
    <ApplyTemplate setRoute={setRoute} step={step} setStep={setStep}>
      {step === 1 && <div>첫번째 스텝</div>}
      {step === 2 && <div>두번째 스텝</div>}
      {step === 3 && <CareType />}
      {step === 4 && <div>네번째 스텝</div>}
    </ApplyTemplate>
  );
}

export default Apply;
