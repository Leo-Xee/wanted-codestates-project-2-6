import React, { useMemo, useState } from "react";
import Time from "../Time";
import Calendar from "../Calendar";

const Schedule = () => {
  const [pickedStartDate, setPickedStartDate] = useState("");
  const [pickedEndDate, setPickedEndDate] = useState("");
  const isToday = useMemo(() => {
    const today = new Date().getDate();
    const pickedDate = new Date(pickedStartDate).getDate();
    return today === pickedDate;
  }, [pickedStartDate]);

  return (
    <>
      <Calendar
        pickedStartDate={pickedStartDate}
        pickedEndDate={pickedEndDate}
        setPickedStartDate={setPickedStartDate}
        setPickedEndDate={setPickedEndDate}
      />
      <Time isToday={isToday} />
    </>
  );
};
export default Schedule;
