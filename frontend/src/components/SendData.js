import axios from "axios";

export default function SendingData(
  header,
  method,
  route,
  data,
  success_func,
  error_func
) {
  if (header) {
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  if (method === "post") {
    axios
      .post(route, data)
      .then((response) => {
        success_func(response);
      })
      .catch((error) => {
        error_func(error);
      });
  }

  if (method === "delete") {
    axios.delete(route).then((response) => {
      success_func(response)
    }).catch((error) => {
      error_func(error)
    })
  }
}
