import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidaton, setFormValidaton] = useState({});
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidaton)) {
      if (formValidaton[formValue] !== null) return false;
    }
    return true;
  }, [formValidaton]);

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [validatorFn, errorMessage] = formValidations[formField];
      formCheckValues[`${formField}Valid`] = validatorFn(formState[formField])
        ? null
        : errorMessage;
      setFormValidaton(formCheckValues);
    }
  };

  return {
    ...formState,
    ...formValidaton,
    formState,
    isFormValid,
    onResetForm,
    onInputChange,
  };
};
