import React, { useState } from "react";

import Options from "../Options";
import OptionPortals from "../Options/OptionPortals";

function Time() {
  const [show, setShow] = useState(false);
  const title = "돌봄 시작 시간 선택";
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
  return (
    <div>
      <div onClick={() => setShow(true)}>돌봄 시작 시간</div>
      <div>하루 돌봄 시간</div>
      {show && (
        <OptionPortals>
          <Options title={title} options={options} show={show} setShow={setShow} />
        </OptionPortals>
      )}
    </div>
  );
}

export default Time;
