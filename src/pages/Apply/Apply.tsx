import React, { useState } from "react";
import ApplyTemplate from "../../components/ApplyTemplate";

import Time from "../../components/Time/Time";

type ApplyProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Apply({ setRoute }: ApplyProps) {
  const [step, setStep] = useState(1);

  return (
    <ApplyTemplate setRoute={setRoute} step={step} setStep={setStep}>
      {step === 1 && <div>첫번째 스텝</div>}
      {step === 2 && <Time />}
      {step === 3 && <div>세번째 스텝</div>}
      {step === 4 && <div>네번째 스텝</div>}
    </ApplyTemplate>
  );
}

export default Apply;
