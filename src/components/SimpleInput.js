import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameFormIsTouched, setNameFormIsTouched] = useState(false);

  const isEnteredValueValid = enteredName.trim() !== "";
  const isNameValid = !(!isEnteredValueValid && nameFormIsTouched);
  let isFormValid = isEnteredValueValid;
  console.log(isFormValid);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameOnBlurHandler = (event) => {
    setNameFormIsTouched(true);
  };

  const formCSSClass = isNameValid ? "form-control" : "form-control invalid";

  return (
    <form>
      <div className={formCSSClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameOnBlurHandler}
          value={enteredName}
        />
        {!isNameValid && <p className='error-text'>Name shouldn't be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
