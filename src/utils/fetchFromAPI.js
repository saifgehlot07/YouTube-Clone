import axios from "axios";

export const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "ccf2f7e78bmsh61fd05701c478ddp1617ccjsn5ec090082d1e",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
