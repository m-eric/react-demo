import axios from "axios";

export const axiosSetToken = token => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
export const axiosRemoveToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};
