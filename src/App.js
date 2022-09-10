import './App.css';
import Navbar from './components/Layout/Navbar';
import UserForm from './components/Login/UserForm';
import Wellcome from './components/StartingPage/Wellcome';
import AllUsers from './components/Users/AllUsers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Wellcome/>
      <UserForm/> */}
      <AllUsers/>

    </div>
  );
}

export default App;
