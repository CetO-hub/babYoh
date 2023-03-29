import React from "react";
import Navigation from "../src/Components/Navigation";
import { render } from "@testing-library/react";

test("testing my Navigation component", () => {
  let navigationRendered = render(<Navigation />);
  expect(navigationRendered).toBeDefined();
});
