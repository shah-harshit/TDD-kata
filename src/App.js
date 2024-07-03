import React, { useState } from "react";
import { parseNumbers, isValidInput } from "./utils";
import "./App.css";

const instructions = (
  <div>
    <h4>Instructions:</h4>
    <p>1. Enter comma separated numbers in the input.</p>
    <p>2. You can enter any amount of numbers.</p>
    <p>
      3. You can enter new lines between numbers instead of commas. For example,
      "1\n2,3".
    </p>
    <p>
      4. To change the delimiter, the beginning of the string will contain a
      separate line that looks like this: "//[delimiter]\n[numbers…]". For
      example, "//;\n1;2" where the delimiter is ";".
    </p>
    <p>5. Negative numbers are not supported.</p>
  </div>
);

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedNumbers = parseNumbers(inputValue);

    if (isValidInput(parsedNumbers)) {
      const result = parsedNumbers.reduce((acc, num) => acc + num, 0);

      alert(`Input Value: ${inputValue} \nAddition: ${result}`);
      setInputValue("");
    } else {
      alert(
        "Invalid input !!\nPlease read instructions carefully and enter a valid input."
      );
    }
  };

  return (
    <div className="App">
      {instructions}
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input
            data-testid="string-input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter comma separated numbers (1, 3, 4)"
          />
          <button
            data-testid="add-button"
            type="submit"
            disabled={!inputValue.trim()}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
