import { renderHook, act } from "@testing-library/react";
import useMonth from "./useMonth";

describe("hooks 테스트", () => {
  const { result } = renderHook(() => useMonth());

  it("현재 년도 반환", () => {
    expect(result.current.curYear).toBe(2023);
  });

  it("현재 월 반환", () => {
    expect(result.current.curMonth).toBe("JUN");
  });

  it("prev 버튼 클릭하면 이전 월 반환", () => {});

  it("년도 선택 기능", () => {});
});

describe("next 버튼 클릭 했을 때", () => {
  it("12월 아니면 월 + 1", () => {
    const { result } = renderHook(() => useMonth());

    act(() => {
      result.current.setNextMonth();
    });

    expect(result.current.curMonth).toBe("JUL");
  });

  it("12월이면 년도 + 1, 1월로 설정", () => {
    const { result } = renderHook(() => useMonth());

    // 12월로 설정
    act(() => {
      result.current.setMonth("DEC");
    });

    act(() => {
      result.current.setNextMonth();
    });

    expect(result.current.curMonth).toBe("JAN");
    expect(result.current.curYear).toBe(2024);
  });
});
