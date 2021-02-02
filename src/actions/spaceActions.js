import { IISLocationAPI, PeopleInSpaceAPI } from "../apis/spaceApis";

export const getCurrentPeopleInSpace = () => {
  return async (dispatch) => {
    const res = await PeopleInSpaceAPI.get("/peopleinspace.json");
    dispatch({
      type: "PEOPLE_IN_SPACE",
      payload: res.data.people,
    });
  };
};

export const getCurrentLocationOfISS = () => {
  return async (dispatch) => {
    const res = await IISLocationAPI.get("/25544");
    dispatch({
      type: "ISS_LOCATION",
      payload: [res.data],
    });
  };
};
