import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import User from './Components/User';
import Admin from './Components/Admin';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path="/signup"element={<SignUp/>}></Route>
        <Route path="/user"element={<User/>}></Route>
        <Route path="/admin"element={<Admin/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
