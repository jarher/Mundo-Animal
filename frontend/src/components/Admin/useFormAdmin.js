import { useState } from "react";
import axios from "axios";
import { APIHOST as host } from "../../app.json";

export const useFormAdmin = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleFormCreate = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("datos enviados satisfactoriamente");
    //   setLoading(true);
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post(`${host}/api/products`, {
          name: form.name,
          category: form.category,
          price: form.price,
          description: form.description,
          imgUrl: form.imgUrl,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleFormCreate,
  };
};
