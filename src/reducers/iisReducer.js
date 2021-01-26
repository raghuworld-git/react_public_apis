const iisReducer = (state = [], action) => {
  switch (action.type) {
    case "ISS_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default iisReducer;
