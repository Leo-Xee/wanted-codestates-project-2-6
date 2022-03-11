import React, { useState } from "react";
import RegisterAddress from "src/components/RegisterAddress/RegisterAddress";
import Schedule from "src/components/Schedule";
import ApplyTemplate from "../../components/ApplyTemplate";
import CareType from "../../components/CareType";
import CarePlace from "src/components/CarePlace";
import Time from "../../components/Time/Time";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(1);
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
      {/* {step === 2 && <Time />} */}
      {/* {step === 3 && <CarePlace />} */}
      {step === 2 && <RegisterAddress setDisabled={setDisabled} setRoute={setRoute} />}
      {step === 5 && <div>다섯번째 스텝</div>}
    </ApplyTemplate>
  );
}

export default Apply;
