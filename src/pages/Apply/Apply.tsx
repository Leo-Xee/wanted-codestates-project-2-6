import React, { useState } from "react";
import RegisterAddress from "src/components/RegisterAddress/RegisterAddress";
import ApplyTemplate from "../../components/ApplyTemplate";

import CarePlace from "../../components/CarePlace";
import CareType from "../../components/CareType";
import Time from "../../components/Time/Time";
import Step4 from "../../components/Step4/Step4";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(5);

  return (
    <ApplyTemplate setRoute={setRoute} step={step} setStep={setStep}>
      {step === 1 && <CareType />}
      {step === 2 && <Time />}
      {step === 3 && <CarePlace />}
      {step === 4 && <RegisterAddress setRoute={setRoute} />}
      {step === 5 && <Step4 />}
    </ApplyTemplate>
  );
}

export default Apply;
