import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../actions/actions.ts";
import React, { useEffect } from "react";
import { fetchUser } from "../services/services.ts";

export const Main : React.FC = () => {
    // User getting from the state value context
    const user = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();
    // Dispatch is collecting the dispatch action

  // Use effect the render with the dependency of render or reload page.  
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  //As there was a condition of not reloading page everytime so I have handled through a click
  const handleRefresh = () => {
    dispatch(fetchUser());
  };

  

  return (

    <div className="user-info-container">
        {/* In Case User is loading or not present It shows loading */}
        {/* USER can also get from state value or else as we have stored in localStorage we can get the item */}
        {/* {FOR EXAMPLE} */}
        {/* console.log(localStorage.getItem('user')) This can be stored in user and also can be called */}
        {/* WithOut using redux we can optimize it in a simple way, But I should show case the tech stack too😊😀 */}
        
      {user ? (
        <div className='user-info'>
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p style={{color:"red"}}>Loading...</p>
      )}
      <button onClick={handleRefresh}>Refresh</button>
    </div>

  ); 
}