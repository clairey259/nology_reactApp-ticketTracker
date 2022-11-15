import React from "react";
import EmployeeCard from "./EmployeeCard";
import { render, screen } from "@testing-library/react";

describe("EmployeeCard tests", () => {
    const employee = {
        name: "claire",
        role: "junior developer"
    }
  test("renders heading", () => {
    render(<EmployeeCard employee={employee} />);
    const employeeCardName = screen.getByTestId("name");
    expect(employeeCardName.innerHTML).toBe("Name: claire");
  });

  test("renders role", () => {
    render(<EmployeeCard employee={employee} />);
    const employeeCardRole = screen.getByTestId("role");
    expect(employeeCardRole.innerHTML).toBe("Role: junior developer");
  });

})