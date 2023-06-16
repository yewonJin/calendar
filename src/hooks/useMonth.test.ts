import { renderHook } from "@testing-library/react";
import useMonth from "./useMonth";

describe("hooks 테스트", () => {
  it("현재 년도 반환", () => {
    const { result } = renderHook(() => useMonth());

    expect(result.current.curYear).toBe(2023);
  });

  it("현재 월 반환", () => {
    const { result } = renderHook(() => useMonth());

    expect(result.current.curMonth).toBe("JUN");
  });

  it("next 버튼 클릭하면 다음 월 반환", () => {});

  it("prev 버튼 클릭하면 이전 월 반환", () => {});

  it("년도 선택 기능", () => {});
});
