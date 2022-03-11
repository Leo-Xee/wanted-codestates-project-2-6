import React, { useEffect, useMemo, useState } from "react";
import Time from "../Time";
import Calendar from "../Calendar";
import { useApplicationDispatch } from "src/contexts/ApplicationContext";
import { useApplicationState } from "src/contexts/ApplicationContext";
const Schedule = ({
  setDisabled,
}: {
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [pickedStartDate, setPickedStartDate] = useState("");
  const [pickedEndDate, setPickedEndDate] = useState("");
  const [visitHour, setVisitHour] = useState("선택");
  const [careHours, setCareHours] = useState("선택");
  const isToday = useMemo(() => {
    const today = new Date().getDate();
    const pickedDate = new Date(pickedStartDate).getDate();
    return today === pickedDate;
  }, [pickedStartDate]);
  const dispatch = useApplicationDispatch();
  const applicationState = useApplicationState();
  useEffect(() => {
    if (
      applicationState.workType === "24시간 상주" &&
      pickedStartDate.length &&
      pickedEndDate.length &&
      visitHour !== "선택"
    ) {
      dispatch({
        type: "SET_SCHEDULE",
        schedule: {
          startDate: pickedStartDate,
          endDate: pickedEndDate,
          visitTime: visitHour,
          hour: null,
        },
      });
      return setDisabled(false);
    }
    if (
      pickedStartDate.length &&
      pickedEndDate.length &&
      visitHour !== "선택" &&
      careHours !== "선택"
    ) {
      dispatch({
        type: "SET_SCHEDULE",
        schedule: {
          startDate: pickedStartDate,
          endDate: pickedEndDate,
          visitTime: visitHour,
          hour: +careHours[0],
        },
      });
      setDisabled(false);
    }
  }, [pickedStartDate, pickedEndDate, visitHour, careHours, dispatch, setDisabled]);

  return (
    <>
      <Calendar
        pickedStartDate={pickedStartDate}
        pickedEndDate={pickedEndDate}
        setPickedStartDate={setPickedStartDate}
        setPickedEndDate={setPickedEndDate}
      />
      <Time
        isToday={isToday}
        visitHour={visitHour}
        setVisitHour={setVisitHour}
        careHours={careHours}
        setCareHours={setCareHours}
      />
    </>
  );
};
export default Schedule;
