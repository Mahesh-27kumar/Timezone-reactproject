import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials
  const correctUsername = 'admin';
  const correctPassword = '123456';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      navigate('/a'); // Navigate to the dashboard or desired page
    } else {
      alert('You entered the wrong username or password!  Hint: usr:admin  pass:123456');
    }
  };

  return (
    <div style={styles.container} className='lo img-fluid container-fluid'>
      <div className='border border-1 shadow logg border border-end-0' >
        <div className='align-items-center mt-5 ms-5' >
      <h1 className='text-white'>Login</h1>
      <form onSubmit={handleLogin} style={styles.form} className='fr'>
        <label style={styles.label}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}  className='frm text-white'
        />
        
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}  className='frm'
        />
        
        <button type="submit" style={styles.button}  className='frm'>Login</button>
      </form>
      </div>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  label: {
    marginBottom: '8px',
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    marginBottom: '16px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '7px',
    backgroundColor: 'transparent',
    fontcolor: 'white !important',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginPage;