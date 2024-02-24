import React from 'react';
import { NavBar } from './components/NavBar.jsx';
import { Main } from './pages/Main.tsx';


 const App: React.FC = () => {

  return (
    <>
    <NavBar/>
    <Main/>
    </>
  );
};

export default App;