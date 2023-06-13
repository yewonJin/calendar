import { render, screen } from "@testing-library/react";
import App from "./App";

describe("render <App />", () => {
  it("헤더가 있어야 한다.", () => {
    render(<App />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });
});
