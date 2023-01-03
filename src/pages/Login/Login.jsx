import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, login, setNameValue } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      return navigate('/');
    }
  }, [login]);

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          onChange={(e) => setNameValue(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <input type="password " placeholder="Password" />
        <button onClick={() => login()}>Login</button>
      </form>
    </div>
  );
};

export default Login;
