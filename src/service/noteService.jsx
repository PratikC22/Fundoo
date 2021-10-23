import axios from "axios";
const url = "http://fundoonotes.incubation.bridgelabz.com/api/";
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("fundooToken"),
  },
};

export const takeNoteRequest = async (obj) => {
  let response = await axios.post(`${url}notes/addNotes`, obj, config);
  return response;
};

export const requestData = async () => {
  let response = await axios.get(`${url}notes/getNotesList`, config);
  let dataArray = response.data.data.data;
  return dataArray;
};
