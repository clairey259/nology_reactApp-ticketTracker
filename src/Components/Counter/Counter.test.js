import React from "react";
import Counter from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter tests", () => {
  test("renders heading", () => {
    render(<Counter />);
    const counterHeading = screen.getByText("Counter");
    expect(counterHeading).toBeInTheDocument();
  });

  test("renders two buttons", () => {
    render(<Counter />);
    const buttonArr= screen.getAllByRole("button");
    expect(buttonArr.length).toBe(2);
  });

  test("when - button is clicked state decreases", () => {
    render(<Counter />);
    const minusButton = screen.getByText("-");
    const currentCount = screen.getByTestId("currentCount")
    expect(currentCount.innerHTML).toBe("0")
    fireEvent.click(minusButton)
    expect(currentCount.innerHTML).toBe("-1")
  });

  test("when + button is clicked state increases", () => {
    render(<Counter />);
    const plusButton = screen.getByText("+");
    const currentCount = screen.getByTestId("currentCount")
    expect(currentCount.innerHTML).toBe("0")
    fireEvent.click(plusButton)
    expect(currentCount.innerHTML).toBe("1")
  });
});
