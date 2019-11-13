import axios from "axios";

const AxiosWithAuth = () => {
  // Allows us to create multiple axios requests, and then just pass in the type that we need

  const token = sessionStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000",
    headers: { authorization: token }
  });
};

export default AxiosWithAuth;