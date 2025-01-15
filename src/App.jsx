import { useState , useContext ,useEffect } from 'react';
import Login from './component/Login.jsx';
import './styles/Login.css';
import {getLocalStorage } from './utlis/LocalStorage.jsx';
import AdminDashboard from './component/DashBoard/AdminDashboard.jsx';
import EmployeeDashboard from './component/DashBoard/EmployeeDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const handleLogin = (email, password) => {
    if (authData.admin.find((event)=>email===event.email && password===event.password)) {
      setUser('admin');

    } else if (authData.employees.find((event)=>email===event.email && password===event.password)) {
      setUser('employee');

    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  );
};

export default App;
