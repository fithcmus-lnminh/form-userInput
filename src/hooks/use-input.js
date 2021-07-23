import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    //IMPORTANT:
    //Once component rendered when enter a keystroke, enteredValueIsValid is true
  };

  const valueInputBlurHandler = () => {
    setIsTouched(true); //only when blur -> validate input values
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError, //or only hasError, though
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
