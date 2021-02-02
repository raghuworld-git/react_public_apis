import spaceApis from '../apis/spaceApis';

export const getCurrentPeopleInSpace = () => {
  return async (dispatch) => {
    const res = await spaceApis.get("/astros.json");
    dispatch({
      type: "PEOPLE_IN_SPACE",
      payload: res.data.people,
    });
  };
};

export const getCurrentLocationOfISS = () => {
  return async (dispatch) => {
    const res = await spaceApis.get("/iss-now.json");
    dispatch({
      type: "ISS_LOCATION",
      payload: [res.data],
    });
  };
};
