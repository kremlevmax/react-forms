import { useState } from "react";

const BasicForm = (props) => {
  const [name, setName] = useState("");
  const [nameOnBlur, setNameOnBlur] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameOnBlur, setLastNameOnBlur] = useState(false);

  const [email, setEmail] = useState("");
  const [emailOnBlur, setEmailOnBlur] = useState(false);

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameOnBlurHandler = (event) => {
    setNameOnBlur(true);
  };

  const isNameValueValid = name.trim() !== "";
  const isNameFormValid = !(!isNameValueValid && nameOnBlur);
  const nameFormClass = isNameFormValid
    ? "form-control"
    : "form-control invalid";

  const lastNameOnChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const lastNameOnBlurHandler = (event) => {
    setLastNameOnBlur(true);
  };

  const isLastNameValueValid = lastName.trim() !== "";
  const isLastNameFormValid = !(!isLastNameValueValid && lastNameOnBlur);

  const lastNameFormClass = isLastNameFormValid
    ? "form-control"
    : "form-control invalid";

  const emailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailOnBlurHandler = (event) => {
    setEmailOnBlur(true);
  };

  const isEmailValueValid = email.includes("@") && email.includes(".");
  const isEmailFormValid = !(!isEmailValueValid && emailOnBlur);

  const emailFormClass = isEmailFormValid
    ? "form-control"
    : "form-control invalid";

  let isWholeFormValid =
    isNameValueValid && isLastNameValueValid && isEmailValueValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setName("");
    setNameOnBlur(false);
    setLastName("");
    setLastNameOnBlur(false);
    setEmail("");
    setEmailOnBlur(false);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={nameFormClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameOnChangeHandler}
            onBlur={nameOnBlurHandler}
            value={name}
          />
          {!isNameFormValid && (
            <p className='error-text'>Name Shouldn't Be Empty</p>
          )}
        </div>
        <div className={lastNameFormClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameOnChangeHandler}
            onBlur={lastNameOnBlurHandler}
            value={lastName}
          />
          {!isLastNameFormValid && (
            <p className='error-text'> Last Name Shouldn't Be Empty</p>
          )}
        </div>
      </div>
      <div className={emailFormClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailOnChangeHandler}
          onBlur={emailOnBlurHandler}
          value={email}
        />
        {!isEmailFormValid && (
          <p className='error-text'>Please Enter a Valid Email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isWholeFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
