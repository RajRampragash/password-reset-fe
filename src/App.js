import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/index';
import AddUser from './Components/AddUser/index';
import ResetPwd from './Components/Resetpassword/index';
import Authorize from './Components/Authorize/index';
import Sent from './Components/Sent/index';
import ForgotPwd from './Components/Forgotpassword/index';


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<ForgotPwd />} ></Route>
        <Route path="/sent" element={<Sent />}></Route>
        <Route path="/authorize" element={<Authorize />}></Route>
        <Route path="/reset/:id" element={<ResetPwd />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<AddUser />}></Route>
      </Routes> */}

      <Routes>
        <Route exact path='/Login' component={<Login />} />
        <Route exact path='/AddUser' component={<AddUser />} />
        <Route path="/reset/:id" element={<ResetPwd />}></Route>
        <Route path="/authorize" element={<Authorize />}></Route>
        <Route path="/sent" element={<Sent />}></Route>
        <Route path="/" element={<ForgotPwd />} ></Route>

      </Routes>
    </div>
  );
}

export default App;
