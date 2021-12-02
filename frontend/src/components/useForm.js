// hook personalizado para validar formulario
import { useState } from "react";
import { APIHOST as host } from "../app.json";
import SendingData from "./SendData";


export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  

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

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      SendingData(
        false,
        "post",
        `${host}/api/auth/login`,
        {
          email: form.email,
          password: form.password,
        },
        (res) => {
          localStorage.setItem("token", res.data.token);
          if (isLoggeIn()) {
            const token = localStorage.getItem("token");
            const { email, name } = JSON.parse(atob(token.split(".")[1]));
            console.log(email, name);
            alert("bienvenido");
          }
        },
        (res) => {
          alert("Error: email y/o contraseña incorrectos");
          console.log(res);
        }
      );
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      SendingData(
        false,
        "post",
        `${host}/api/auth/register`,
        {
          name: form.name,
          email: form.email,
          password: form.password,
        },
        (res) => {
          alert("usuario registrado con éxito");
          localStorage.setItem("token", res.data.token);
        },
        (res) => {
          alert("error, el usuario ya existe");
          console.log(res);
        }
      );
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      SendingData(
        true,
        "post",
        "https://formsubmit.co/ajax/mundoanimalacacias@gmail.com",
        {
          name: form.name,
          lastname: form.lastname,
          email: form.email,
          phone: form.phone,
          comments: form.comments,
        },
        (res) => {
          alert("datos enviados satizfactoriamente");
          console.log(res);
        },
        (res) => {
          alert(
            "error, hubo un problema al enviar los datos, inténtalo de nuevo"
          );
          console.log(res);
        }
      );
    }
    
  };

  const handleUpProd = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      let id = e.target.querySelector("#prodId").value;
      SendingData(
        false,
        "put",
        `${host}/api/products/${id}`,
        {
          name: form.name,
          category: form.category,
          price: form.price,
          description: form.description,
          imgUrl: form.file,
        },
        (res) => {
          alert("producto actualizado con éxito");
          console.log(res);
        },
        (res) => {
          alert("se produjo un error al intentar actualizar el producto");
          console.log(res);
        }
      );
    }
  };

  const isLoggeIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };


  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleLogin,
    handleRegister,
    handleContact,
    handleUpProd,
  };
};
