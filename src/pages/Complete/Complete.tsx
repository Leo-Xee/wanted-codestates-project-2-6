import React from "react";

type CompleteProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Complete({ setRoute }: CompleteProps) {
  return <div>Complete</div>;
}

export default Complete;
