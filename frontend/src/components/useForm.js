// hook personalizado para validar formulario

import { useState } from "react";
import axios from "axios";

export const useForm = (initialForm, validateForm) => {
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

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0){
      alert('ok')
      setLoading(true);
      
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("ok");
      setLoading(true);
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("datos enviados satizfactoriamente");
      setLoading(true);
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/jefferh33@gmail.com", {
          name: form.name,
          lastname:form.lastname,
          email:form.email,
          phone:form.phone,
          comments: form.comments,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleLogin,
    handleRegister,
    handleContact
  };
};
