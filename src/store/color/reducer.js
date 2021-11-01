const initalState = { color: "background-color:#000" };
export default (state = initalState, action) => {
  if (action.type === "UPDATE_COLOR") {
    return {
      ...state,
      color: action.payload
    };
  }
  return state;
};
//export const selectActiveColor = (state) => state.color_reducer.color;
