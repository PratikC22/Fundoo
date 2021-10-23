import axios from "axios";
const url = "http://fundoonotes.incubation.bridgelabz.com/api";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

export const signUpRequest = async function (obj) {
  let response = await axios.post(`${url}/user/userSignUp`, obj);
  return response;
};

export const logInRequest = async (obj) => {
  let response = await axios.post(`${url}/user/login`, obj);
  localStorage.setItem("fundooToken", response.data.id);
  return response;
};

export const requestResetPass = async (obj) => {
  let response = await axios.post(`${url}/user/reset`, obj);
  return response;
};

export const resetpass = async function (obj) {
  console.log("Config", config);
  let response = await axios.post(`${url}/user/reset-password`, obj, config);
  return response;
};
