import React, { useState } from "react";
import RegisterAddress from "src/components/RegisterAddress/RegisterAddress";
import Schedule from "src/components/Schedule";
import ApplyTemplate from "../../components/ApplyTemplate";
import CarePlace from "../../components/CarePlace";
import CareType from "../../components/CareType";
import Time from "../../components/Time/Time";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(1);

  return (
    <ApplyTemplate setRoute={setRoute} step={step} setStep={setStep}>
      {step === 1 && <CareType />}
      {step === 2 && <Schedule />}
      {step === 3 && <CarePlace />}
      {step === 4 && <RegisterAddress setRoute={setRoute} />}
      {step === 5 && <div>다섯번째 스텝</div>}
    </ApplyTemplate>
  );
}

export default Apply;
