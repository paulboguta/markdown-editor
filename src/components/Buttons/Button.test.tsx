import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("test button", () => {
  it("renders button", () => {
    render(<Button backgroundColor="red" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should handle onClick", () => {
    const onClick = jest.fn();
    render(<Button backgroundColor="red" onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("should receive children and display inside a button", () => {
    render(<Button backgroundColor="red">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Test");
  });
});
