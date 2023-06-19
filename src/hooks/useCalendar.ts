import { Months } from "../types/month";
import { months } from "./useMonth";

export const useRenderCalendar = (
  firstDayOfMonth: number,
  lastDayOfMonth: number
) => {};

// baseYear: 2022, baseMonth: 1, baseDay: 1, baseDayOfTheWeek: "SAT";
export const useCalculateCalendar = (curMonth: Months, curYear: number) => {
  const setFirstDayOfMonth = () => {
    const curMonthIndex = months.indexOf(curMonth);

    const sum =
      curMonthIndex !== 0
        ? numberOfDaysPerMonth
            .slice(0, curMonthIndex)
            .reduce((acc, cur) => acc + cur)
        : 0;

    return (
      (sum + yearGap(curYear) + isThereLeapMonth(curYear, curMonthIndex)) % 7
    );
  };

  const setLastDayOfMonth = () => {};

  return { setFirstDayOfMonth };
};

const numberOfDaysPerMonth = [
  31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 31, 30, 31,
];

const baseYear = 2022;

const yearGap = (curYear: number) => (curYear - baseYear) * 365;

const isThereLeapMonth = (curYear: number, curMonthIndex: number) => {
  // 현재 년도가 윤년이고 3월 이상이면 그 횟수만큼 + 1
  if (curYear % 4 === 0) {
    if (curMonthIndex >= 2) return Math.floor((curYear - baseYear) / 4) + 1;
    else return Math.floor((curYear - baseYear) / 4);
  }

  
  // 현재 년도와 baseYear 사이에 윤년이 껴있으면 그 횟수만큼 +1
  let sum = 0;
  
  for (let i = baseYear; i <= curYear; i++) {
    if (i % 4 === 0) {
      sum++;
    }
  }

  return sum;
};
