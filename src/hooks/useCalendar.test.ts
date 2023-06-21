import { renderHook, act } from "@testing-library/react";
import useCalendar from "./useCalendar";

describe("월의 시작일 설정", () => {
  // 토요일부터 0, 일요일 1, ... , 금요일 6

  it("2023년 6월은 목요일부터 1일", () => {
    const { result } = renderHook(() => useCalendar("JUN", 2023));

    expect(result.current.setFirstDayOfMonth()).toStrictEqual(5);
  });

  it("2023년 9월은 금요일부터 1일", () => {
    const { result } = renderHook(() => useCalendar("SEP", 2023));

    expect(result.current.setFirstDayOfMonth()).toStrictEqual(6);
  });

  it("2024년 3월은 금요일부터 1일", () => {
    const { result } = renderHook(() => useCalendar("MAR", 2024));

    expect(result.current.setFirstDayOfMonth()).toStrictEqual(6);
  });

  it("2026년 2월은 월요일부터 1일", () => {
    const { result } = renderHook(() => useCalendar("FEB", 2026));

    expect(result.current.setFirstDayOfMonth()).toStrictEqual(1);
  });

  it("2026년 1월은 목요일부터 1일", () => {
    const { result } = renderHook(() => useCalendar("JAN", 2026));

    expect(result.current.setFirstDayOfMonth()).toStrictEqual(5);
  });

  it("2029년 8월은 수요일부터 1일", () => {
    const { result } = renderHook(() => useCalendar("AUG", 2029));

    expect(result.current.setFirstDayOfMonth()).toStrictEqual(4);
  });
});

describe("월의 일수", () => {
  it("ex) 2023년 6월은 30일까지 있다.", () => {
    const { result } = renderHook(() => useCalendar("JUN", 2023));

    expect(result.current.numberOfDaysOfCurMonth).toBe(30);
  });

  it("2024년 2월은 29일까지 있다.", () => {
    const { result } = renderHook(() => useCalendar("FEB", 2024));

    expect(result.current.numberOfDaysOfCurMonth).toBe(29);
  });
});
