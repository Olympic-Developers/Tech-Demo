import react from "react";
import Signup from './components/Signup';
import Login from './components/Login';
import Status from './components/Status';
import { Account } from './components/Accounts';

function App() {
  return (
    <Account>

      <br />

      <Status />
      <br />

      <Signup />
      <br />

      <Login />
    </Account>
  )
};

export default App;