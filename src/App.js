import { useState } from 'react';
import LoginForm from './pages/LoginForm';
import { Routes, Route } from "react-router-dom";
import SignUp  from './pages/SignUp';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
