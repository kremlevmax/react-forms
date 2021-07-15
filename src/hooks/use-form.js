import { useState } from "react";

const useForm = (validateFormValue) => {
  const [formValue, setFormValue] = useState("");
  const [formWasTouched, setFormWasTouched] = useState(false);

  const isFormValueValid = validateFormValue(formValue);
  const isFormValid = !(!isFormValueValid && formWasTouched);

  const formChangeHandler = (event) => {
    setFormValue(event.target.value);
  };

  const formOnBlurHandler = (event) => {
    setFormWasTouched(true);
  };

  return {
    formValue,
    isFormValueValid,
    isFormValid,
    formChangeHandler,
    formOnBlurHandler,
  };
};

export default useForm;
