import { useState } from 'react';
import Login from './component/Login.jsx';
import './styles/Login.css';
// import { setLocalStorage, getLocalStorage } from './utlis/LocalStorage.jsx';
import AdminDashboard from './component/DashBoard/AdminDashboard.jsx';
import EmployeeDashboard from './component/DashBoard/EmployeeDashboard.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin');
      console.log('admin');
    } else if (email === 'user@gmail.com' && password === '123') {
      setUser('user');
      console.log('user');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'user' && <EmployeeDashboard />}
    </>
  );
};

export default App;
