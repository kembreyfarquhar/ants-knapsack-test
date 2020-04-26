import axios from "axios";

const axiosWithAuth = () => {
  const key = localStorage.getItem("user-key");
  const baseURL = process.env.REACT_APP_BASEURL;
  return axios.create({
    baseURL,
    headers: { Authorization: key },
  });
};

export default axiosWithAuth;
