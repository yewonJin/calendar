import { renderHook, act } from "@testing-library/react";
import { useCalculateCalendar } from "./useCalendar";

describe("월의 시작일 설정", () => {
  // 토요일부터 0, 일요일 1, ... , 금요일 6

  it("2023년 6월은 목요일부터 1일", () => {
    const { result } = renderHook(() => useCalculateCalendar("JUN", 2023));

    expect(result.current.setFirstDayOfMonth()).toBe(5);
  });

  it("2023년 1월은 일요일부터 1일", () => {
    const { result } = renderHook(() => useCalculateCalendar("JAN", 2023));

    expect(result.current.setFirstDayOfMonth()).toBe(1);
  });

  it("2024년 3월은 금요일부터 1일", () => {
    const { result } = renderHook(() => useCalculateCalendar("MAR", 2024));

    expect(result.current.setFirstDayOfMonth()).toBe(6);
  });

  it("2026년 2월은 월요일부터 1일", () => {
    const { result } = renderHook(() => useCalculateCalendar("FEB", 2026));

    expect(result.current.setFirstDayOfMonth()).toBe(1);
  });

  it("2026년 1월은 목요일부터 1일", () => {
    const { result } = renderHook(() => useCalculateCalendar("JAN", 2026));

    expect(result.current.setFirstDayOfMonth()).toBe(5);
  });

  it("2029년 8월은 수요일부터 1일", () => {
    const { result } = renderHook(() => useCalculateCalendar("AUG", 2029));

    expect(result.current.setFirstDayOfMonth()).toBe(4);
  });
});

describe("월의 종료일 설정", () => {
  it("ex) 2023년 6월은 금요일이 30일", () => {});
});
