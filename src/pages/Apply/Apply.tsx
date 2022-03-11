import React, { useState } from "react";
import RegisterAddress from "src/components/RegisterAddress/RegisterAddress";
import CareSchedule from "src/components/CareSchedule/CareSchedule";
import ApplyTemplate from "../../components/ApplyTemplate";
import CareType from "../../components/CareType";
import CarePlace from "src/components/CarePlace";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(4);
  const [disabled, setDisabled] = useState(true);

  return (
    <ApplyTemplate
      setRoute={setRoute}
      step={step}
      setStep={setStep}
      disabled={disabled}
      setDisabled={setDisabled}
    >
      {step === 1 && <CareType setDisabled={setDisabled} />}
      {step === 2 && <CareSchedule setDisabled={setDisabled} />}
      {step === 3 && <CarePlace setDisabled={setDisabled} />}
      {step === 4 && <RegisterAddress setRoute={setRoute} setDisabled={setDisabled} />}
      {step === 5 && <div>다섯번째 스텝</div>}
    </ApplyTemplate>
  );
}

export default Apply;
