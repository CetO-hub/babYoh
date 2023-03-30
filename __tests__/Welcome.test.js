import React from "react";
import { render } from "@testing-library/react";
import Welcome from "../src/Components/Welcome";

let welcomeRendered;

beforeEach(() => {
  welcomeRendered = render(<Welcome />);
});

describe("Welcome component testing", () => {
  test("Welcome component is rendered", () => {
    expect(welcomeRendered).toBeDefined();
  });
  test("hero image is rendered", () => {
    let heroImage = welcomeRendered.queryByTestId("hero-image");
    expect(heroImage).not.toBeNull();
  });
});
