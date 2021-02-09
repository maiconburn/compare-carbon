import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
};

function answer(state = INITIAL_STATE, { type, data }) {
  switch (type) {
    case "ADD_RICH_STATE":
      return { data: data };
    case "STATE_BY_GEOLOCATION":
      return {
        data: data,
        initialState:
          state.initialState === undefined ? state.data : state.initialState,
      };
    case "STATE_BY_GOOGLE":
      return {
        data: data,
        initialState:
          state.initialState === undefined ? state.data : state.initialState,
      };
    case "FILTER_ALL":
      return { data: data };
    case "FILTER_LEVEL":
      return {
        data: [...data.state.filter((element) => element.level == data.level)],
      };
    default:
      return state;
  }
}

const store = createStore(answer);

export default store;
