import { useState, useContext, useEffect } from 'react';
import Login from './component/Login.jsx';
import './styles/Login.css';
// FIXED: Removed unused import
import AdminDashboard from './component/DashBoard/AdminDashboard.jsx';
import EmployeeDashboard from './component/DashBoard/EmployeeDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  // FIXED: Proper useEffect implementation with error handling
  useEffect(() => {
    // Only check localStorage on mount, no dependency on authData needed
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        // FIXED: Proper JSON parsing with error handling
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []); // FIXED: Removed unnecessary dependency

  const handleLogin = (email, password) => {
    // FIXED: Added guard clause
    if (!authData) return;

    // FIXED: Separated user finding logic for clarity
    const adminUser = authData.admin.find(
      (event) => email === event.email && password === event.password
    );

    const employeeUser = authData.employees.find(
      (event) => email === event.email && password === event.password
    );

    // FIXED: Consistent use of JSON.stringify
    if (adminUser) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (employeeUser) {
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
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