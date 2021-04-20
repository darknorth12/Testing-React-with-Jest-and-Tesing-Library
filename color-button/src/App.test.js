import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumRedViolet" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});

test("intial conditions", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(buttonEl).toBeEnabled();

  const checkboxEl = screen.getByRole("checkbox");
  expect(checkboxEl).not.toBeChecked();
});

test("Check disables button on first click and enables on the second click", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxEl = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkboxEl);
  expect(buttonEl).toBeDisabled();

  fireEvent.click(checkboxEl);
  expect(buttonEl).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const buttonEL = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxEL = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkboxEL);
  expect(buttonEL).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkboxEL);
  expect(buttonEL).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const buttonEL = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxEl = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(buttonEL);

  fireEvent.click(checkboxEl);
  expect(buttonEL).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkboxEl);
  expect(buttonEL).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("space before camel=case letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple caplital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
