import react, { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-east-2_ZpPDf7ZeL',
    ClientId: '3h8gft16acr1ho0n1fonsm78n'
  };

  const UserPool = new CognitoUserPool(poolData);

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, ( err,data ) => {
        if (err) console.error(err);
        console.log(data);
    });
  }

  return (
    <div className = "d-flex justify-content-center align-items-center masthead">
        <form onSubmit={onSubmit}>  

        <div>
            <label>Email:</label>
            <input
                value = {email}
                onChange = {event => setEmail(event.target.value)}
            />
        </div>

        <div>
            <label>Password:</label>
            <input
                value = {password}
                onChange = {event => setPassword(event.target.value)}
            />
        </div>

        <button type='submit'> SignUp</button>
      </form>
    </div>
  )

};

export default App;