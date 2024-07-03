import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app.tsx", () => {
  test("renders appropriate instructions", () => {
    render(<App />);
    const instructionsTitle = screen.getByText("Instructions:");
    const inputInstruction = screen.getByText(
      "1. Enter comma separated numbers in the input."
    );
    const numberCountInstruction = screen.getByText(
      "2. You can enter any amount of numbers."
    );
    const newLineInputInstruction = screen.getByText(
      '3. You can enter new lines between numbers instead of commas. For example, "1\\n2,3".'
    );
    const delimeterInstruction = screen.getByText(
      '4. To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\\n[numbers…]". For example, "//;\\n1;2" where the delimiter is ";".'
    );
    const negativeNumberInstruction = screen.getByText(
      "5. Negative numbers are not supported."
    );

    expect(instructionsTitle).toBeDefined();
    expect(inputInstruction).toBeDefined();
    expect(numberCountInstruction).toBeDefined();
    expect(newLineInputInstruction).toBeDefined();
    expect(delimeterInstruction).toBeDefined();
    expect(negativeNumberInstruction).toBeDefined();
  });

  test("renders input and add button", () => {
    render(<App />);

    const stringInput = screen.getByTestId("string-input");
    const addButton = screen.getByTestId("add-button");

    expect(stringInput).toBeDefined();
    expect(addButton).toBeDefined();
  });
});
