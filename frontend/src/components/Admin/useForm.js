// hook personalizado para validar formulario

import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setForm({
          ...form,
          [name]:value
      })
  };

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  };
};
