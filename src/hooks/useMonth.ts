import { useState } from "react";

const useMonth = () => {
  const [curMonth, setCurMonth] = useState(months[new Date().getMonth()]);
  const [curYear, setCurYear] = useState(new Date().getFullYear());

  const setMonth = (month: (typeof months)[number]) => {
    setCurMonth(month);
  };

  const setNextMonth = () => {
    const curMonthIndex = months.indexOf(curMonth);

    if (isLastMonth(curMonthIndex)) {
      setCurMonth(months[0]);
      setCurYear((prev) => prev + 1);
    } else {
      setCurMonth(months[curMonthIndex + 1]);
    }
  };

  const setPrevMonth = () => {
    const curMonthIndex = months.indexOf(curMonth);

    if (isFirstMonth(curMonthIndex)) {
      setCurMonth(months[months.length - 1]);
      setCurYear((prev) => prev - 1);
    } else {
      setCurMonth(months[curMonthIndex - 1]);
    }
  };

  return { curMonth, curYear, setMonth, setNextMonth, setPrevMonth };
};

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

const isLastMonth = (curMonthIndex: number) => {
  if (curMonthIndex === months.length - 1) {
    return true;
  } else {
    return false;
  }
};

const isFirstMonth = (curMonthIndex: number) => {
  if (curMonthIndex === 0) {
    return true;
  } else {
    return false;
  }
};

export default useMonth;
