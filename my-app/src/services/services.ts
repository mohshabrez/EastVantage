import axios from "axios";
import { BASE_URL } from "../actions/actions.ts";

// The Service of API Call should return any true value.
export const fetchUser = (): any => {
    return async (dispatch: any) => {
      // ASYNC Factor of dispatch is sent in case of true value
      try {
        const response = await axios.get(BASE_URL);
        // Response is collected via axios fetch call
        const data = response.data.results[0]
        // Data gets desctructred
        const completeName = `${data.name.title} ${data.name.first} ${data.name.last}`;
        // Assigned the name and email as per requirement
        const email = data.email
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: { name: completeName, email } });
        // Sent the dispatch call to reducer for the State handling
        localStorage.setItem('user', JSON.stringify({ name: completeName, email }));
        // And as requirement the data is set in local storage
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  };

 

