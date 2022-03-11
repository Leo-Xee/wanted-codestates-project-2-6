import React, { useState } from "react";
import RegisterAddress from "src/components/RegisterAddress/RegisterAddress";
import CareSchedule from "src/components/CareSchedule/CareSchedule";
import ApplyTemplate from "../../components/ApplyTemplate";
import CareType from "../../components/CareType";
import CarePlace from "src/components/CarePlace";
import Step4 from "../../components/Step4/Step4";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(5);
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
      {step === 3 && <CarePlace />}
      {step === 4 && <RegisterAddress setRoute={setRoute} />}
      {step === 5 && <Step4 setDisabled={setDisabled} />}
    </ApplyTemplate>
  );
}

export default Apply;
