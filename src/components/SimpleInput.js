import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false); //init value must not be true
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); //->solve above problem
  //touch means touch to the input field and work on it
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(false);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true); //only when blur -> validate input values

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true); //only when press submit btn -> validate input value

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);
    setEnteredName("");
  };

  const nameInputIsInvalid = !nameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
