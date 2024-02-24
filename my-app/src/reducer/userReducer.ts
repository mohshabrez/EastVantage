import { AppState, FETCH_USER_SUCCESS } from "../actions/actions.ts";

// When the service and fetch of API gets success then the reducer will update the state value

export const userReducer = (state: AppState = { user: null }, action: any) => {
    switch (action.type) {
      case FETCH_USER_SUCCESS:
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };