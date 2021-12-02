import axios from "axios";
import { APIHOST as host } from "../app.json";


// const getImages = () => {};

export default function sendImages (file) {
  const form = new FormData();
  form.append("file", file, "form-data");
  return axios.post(`${host}/`, form);
};

