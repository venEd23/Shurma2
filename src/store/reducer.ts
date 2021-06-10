import { Actions } from "./actions";
import { TReducer } from "./types";

const initialState: TReducer = {
  login: "",
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case Actions.setUserLogin:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
