import { render, screen } from "@testing-library/react";
import { ToggleDarkMode } from "./ToggleDarkMode";

describe("test toggle darkmode component", () => {
  it("should render button", () => {
    render(<ToggleDarkMode />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
