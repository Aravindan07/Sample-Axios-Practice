import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "Auth Token";
axios.defaults.headers.post["Content-Type"] = "Application/JSON";

axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
