// USER Interface made for the proper return and prop results
export interface User {
    name: string;
    email: string;
  }
  
// APP STATE For the store value should be either User or null
export interface AppState {
    user: User | null;
  }

export const FETCH_USER_SUCCESS : string = "FETCH_USER_SUCCESS";

// We can either store BASE_URL in .env or any other state for privacy
export const BASE_URL = "https://randomuser.me/api"