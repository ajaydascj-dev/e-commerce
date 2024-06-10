import { useState } from "react";

const useForm = (intialFValues) => {
  const [values, setValues] = useState(intialFValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};

export default useForm;
