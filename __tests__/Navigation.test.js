import React from "react";
import Navigation from "../src/Components/Navigation";
import { render } from "@testing-library/react";

let navigationRendered;

beforeEach(() => {
  navigationRendered = render(<Navigation />);
});

describe("testing my Navigation component", () => {
  test("Navigation component is rendered", () => {
    expect(navigationRendered).toBeDefined();
  });
  test("Logo is rendered", () => {
    let logo = navigationRendered.queryByTestId("logo");
    expect(logo).not.toBeNull();
  });
  test("Login button is rendered", () => {
    let login = navigationRendered.queryByTestId("login");
    expect(login).not.toBeNull();
  });
  test("signup button is rendered", () => {
    let signup = navigationRendered.queryByTestId("signup");
    expect(signup).not.toBeNull();
  });
});
