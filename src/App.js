import { useState } from 'react';
import LoginForm from './pages/LoginForm';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);



  return (
    <div>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
