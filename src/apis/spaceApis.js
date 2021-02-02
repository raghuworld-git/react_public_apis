import axios from "axios";

export const IISLocationAPI =  axios.create({
  baseURL: "https://api.wheretheiss.at/v1/satellites",
});

export const PeopleInSpaceAPI =  axios.create({
  baseURL: "http://api.open-notify.org",
});

