import { useState } from 'react';
import LoginForm from './pages/LoginForm';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import SignUp  from './pages/SignUp';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
        <Route path='/login' element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />}/>
    </Routes>
  );
}

export default App;
