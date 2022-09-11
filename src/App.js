import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Users from './pages/Users';


function App() {
 
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/users" element={ <Users/> } />
      </Routes>
    </Layout>
   
  );
}

export default App;
