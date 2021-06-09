import { Actions } from "./actions";
import { TReducer } from "./types";


const initialState: TReducer = {
    login: "",
};


const reducer = (
    state = initialState,
    action: {
        type: string;
        payLoad: any;
    }    
) => {
    switch(action) {
        case Actions.setUserLogin:
            return {
                ...state,
                login: action.payLoad,
            };
        default:
            return state;
    }
};

export default reducer;