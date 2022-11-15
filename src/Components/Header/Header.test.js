import React from "react";
import Header from "./header";
import { render, screen } from "@testing-library/react";

describe("Header tests", () => {
  test("renders heading", () => {
    render(<Header />);
    const headerName = screen.getByTestId("heading");
    expect(headerName.innerHTML).toBe("Ticket Tracker");
  });
});
