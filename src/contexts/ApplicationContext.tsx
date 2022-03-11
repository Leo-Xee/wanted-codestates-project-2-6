import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type WorkType = string;

export type Address = {
  locationCode: string | null;
  roadCode: string;
  roadAddress: string;
  jibunAddress: string;
  sidoName: string;
  sigunguName: string;
  myundongName: string;
  liName: string;
  addressDetail: string;
};

export type Schedule = {
  startDate: string;
  endDate: string;
  visitTime: string;
  hour: number | null;
};

export type PhoneNumber = string;

export type CovidTestType = string | null;

type State = {
  workType: WorkType;
  address: Address;
  schedule: Schedule;
  phoneNumber: PhoneNumber;
  covidTestType: CovidTestType;
};

const initialApplicationState: State = {
  workType: "",
  address: {
    locationCode: "",
    roadCode: "",
    roadAddress: "",
    jibunAddress: "",
    sidoName: "",
    sigunguName: "",
    myundongName: "",
    liName: "",
    addressDetail: "",
  },
  phoneNumber: "",
  schedule: {
    startDate: "",
    endDate: "",
    visitTime: "",
    hour: 0,
  },
  covidTestType: "",
};

const SET_WORK_TYPE = "SET_WORK_TYPE" as const;
const SET_ADDRESS = "SET_ADDRESS" as const;
const SET_SCHEDULE = "SET_SCHEDULE" as const;
const SET_PHONE_NUMBER = "SET_PHONE_NUMBER" as const;
const SET_COVID_TEST_TYPE = "SET_COVID_TEST_TYPE" as const;

type SET_WORK_TYPE = "SET_WORK_TYPE";
type SET_ADDRESS = "SET_ADDRESS";
type SET_SCHEDULE = "SET_SCHEDULE";
type SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
type SET_COVID_TEST_TYPE = "SET_COVID_TEST_TYPE";

type Action =
  | { type: SET_WORK_TYPE; workType: WorkType }
  | { type: SET_ADDRESS; address: Address }
  | { type: SET_SCHEDULE; schedule: Schedule }
  | { type: SET_PHONE_NUMBER; phoneNumber: PhoneNumber }
  | { type: SET_COVID_TEST_TYPE; covidTestType: CovidTestType };

type ApplicationDispatch = Dispatch<Action>;

function applicationReducer(state: State, action: Action): State {
  switch (action.type) {
    case SET_WORK_TYPE:
      return { ...state, workType: action.workType };
    case SET_ADDRESS:
      return { ...state, address: action.address };
    case SET_SCHEDULE:
      return { ...state, schedule: action.schedule };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber };
    case SET_COVID_TEST_TYPE:
      return { ...state, covidTestType: action.covidTestType };
  }
}

const ApplicationStateContext = createContext<State | null>(null);
const ApplicationDispatchContext = createContext<ApplicationDispatch | null>(null);

export function ApplicationProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(applicationReducer, initialApplicationState);

  return (
    <ApplicationStateContext.Provider value={state}>
      <ApplicationDispatchContext.Provider value={dispatch}>
        {children}
      </ApplicationDispatchContext.Provider>
    </ApplicationStateContext.Provider>
  );
}

export function useApplicationState() {
  const context = useContext(ApplicationStateContext);
  if (!context) {
    throw new Error("cannot find Applicationstate provider");
  }
  return context;
}

export function useApplicationDispatch() {
  const context = useContext(ApplicationDispatchContext);
  if (!context) {
    throw new Error("cannot find ApplicationDispatch provider");
  }
  return context;
}
