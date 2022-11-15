import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("app tests", () => {
  test("renders app and EmployeeCard", () => {
    render(<App />);
    const header = screen.getByTestId("header");
    const employeeCard = screen.getByTestId("employeeCard");
    expect(header).toBeInTheDocument();
    expect(employeeCard).toBeInTheDocument();
  });

  test("renders multiple employee cards", () => {
    render(<App />);
    const employeeCard = screen.getAllByTestId("singleEmployeeCard");
    expect(employeeCard.length).toBe(10);
  });
});
