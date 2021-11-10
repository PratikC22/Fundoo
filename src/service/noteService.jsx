import axios from "axios";
const url = "http://fundoonotes.incubation.bridgelabz.com/api/";

const config = {
  headers: {
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

export const addNoteToArchive = async (obj) => {
  let response = await axios.post(`${url}/notes/archiveNotes`, obj, config);
  return response;
}

export const trashNote = async (obj) => {
  let response = await axios.post(`${url}/notes/trashNotes`, obj, config);
  return response;
}

export const changeColor = async (obj) => {
  let response = await axios.post(`${url}/notes/changesColorNotes`, obj, config);
  return response;
}

export const getReminders = async (obj) => {
  let response = await axios.post(`${url}/notes/getReminderNotesList`, obj, config);
  return response;
}

export const getArchivedNotes = async (obj) => {
  let response = await axios.get(`${url}/notes/getArchiveNotesList`, config);
  return response;
}

export const getTrashedNotes = async (obj) => {
  let response = await axios.get(`${url}/notes/getTrashNotesList`, config);
  return response;
}

export const updateNotes = async (obj) => {
  console.log(obj)
  console.log(config)
  let response = await axios.post(`${url}/notes/updateNotes`, obj, config);
  return response;
}