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
    const fetchData = async () => {
      try {
        const res = await axios.get<State>("https://caredoc-fe-server.herokuapp.com/static");
        // console.log(res.data);
        setStaticData(res.data);
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
