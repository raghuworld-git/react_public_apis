const spaceReducer = (state = [], action) => {
  switch (action.type) {
    case "PEOPLE_IN_SPACE":
      return action.payload;
    default:
      return state;
  }
};

export default spaceReducer;
