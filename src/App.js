import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Users from './pages/Users';
import { useContext } from 'react';
import AuthContext from './store/auth-context';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {!authCtx.isLoggedIn && (<Route path="/login" element={<Login />} />)}

        {authCtx.isLoggedIn && (
          <Route path="/users" element={<Users />} />
        ) }
        <Route  path="*" element={ <Navigate to="/" /> } />
        
      </Routes>
    </Layout>

  );
}

export default App;
