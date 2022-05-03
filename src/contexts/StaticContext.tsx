import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

export type State = {
  covidTestTypes: { value: string; text: string }[];
  applymentWorkTypes: {
    value: string;
    text: string;
  }[];
  careHours: {
    value: number;
    text: string;
    disabled: boolean;
  }[];
  policy: {
    minBeforeFirstScheduleVisitHour: number;
  };
};

const StaticStateContext = createContext<State | null>(null);

export function StaticProvider({ children }: { children: React.ReactNode }) {
  const [staticData, setStaticData] = useState<State | null>(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        // const res = await axios.get<State>("https://caredoc-fe-server.herokuapp.com/static");
        // console.log(res.data);
        setStaticData({
          covidTestTypes: [
            {
              value: "CovidTestType.UNNECESSARY",
              text: "필요 없음",
            },
            {
              value: "CovidTestType.REQUIRED",
              text: "검사 필요",
            },
            {
              value: "CovidTestType.FEVER_CHECK_ONLY",
              text: "열체크,문진표만",
            },
            {
              value: "CovidTestType.HOSPITAL_CHECK_REQUIRED",
              text: "확인 필요",
            },
          ],
          applymentWorkTypes: [
            {
              value: "ApplymentWorkType.TIME",
              text: "시간제",
            },
            { value: "ApplymentWorkType.DAY", text: "24시간" },
          ],
          careHours: [
            {
              value: 3,
              text: "3시간",
              disabled: false,
            },
            {
              value: 4,
              text: "4시간",
              disabled: false,
            },
            {
              value: 5,
              text: "5시간",
              disabled: false,
            },
            {
              value: 6,
              text: "6시간",
              disabled: false,
            },
            {
              value: 7,
              text: "7시간",
              disabled: false,
            },
            {
              value: 8,
              text: "8시간",
              disabled: false,
            },
            {
              value: 9,
              text: "9시간",
              disabled: false,
            },
          ],
          policy: { minBeforeFirstScheduleVisitHour: 4 },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        } else {
          throw new Error("different error than axios");
        }
      }
    };

    void fetchData();
  }, []);

  return <StaticStateContext.Provider value={staticData}>{children}</StaticStateContext.Provider>;
}

export function useStaticState() {
  const context = useContext(StaticStateContext);
  if (!context) {
    throw new Error("Cannot fint StaticProvider");
  }
  return context;
}
