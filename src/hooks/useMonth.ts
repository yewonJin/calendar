import { useState } from "react";

const useMonth = () => {    
  const [curMonth, setCurMonth] = useState(months[new Date().getMonth()]);
  const [curYear, setCurYear] = useState(new Date().getFullYear());

  return { curMonth, curYear };
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
];

export default useMonth;
