import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    formValue: name,
    isFormValueValid: isNameValueValid,
    isFormValid: isNameFormValid,
    formChangeHandler: nameOnChangeHandler,
    formOnBlurHandler: nameOnBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    formValue: lastName,
    isFormValueValid: isLastNameValueValid,
    isFormValid: isLastNameFormValid,
    formChangeHandler: lastNameOnChangeHandler,
    formOnBlurHandler: lastNameOnBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    formValue: email,
    isFormValueValid: isEmailValueValid,
    isFormValid: isEmailFormValid,
    formChangeHandler: emailOnChangeHandler,
    formOnBlurHandler: emailOnBlurHandler,
  } = useForm((value) => value.includes("@") && value.includes("."));

  const nameFormClass = isNameFormValid
    ? "form-control"
    : "form-control invalid";

  const lastNameFormClass = isLastNameFormValid
    ? "form-control"
    : "form-control invalid";

  const emailFormClass = isEmailFormValid
    ? "form-control"
    : "form-control invalid";

  let isWholeFormValid =
    isNameValueValid && isLastNameValueValid && isEmailValueValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();
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
