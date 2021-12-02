import { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";

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
    <div>
      <form onSubmit={onSubmit}>  

        <input
          value = {email}
          onChange = {event => setEmail(event.target.value)}
        />

        <input
          value = {password}
          onChange = {event => setPassword(event.target.value)}
        />

        <button type='submit'> SignUp</button>
      </form>
    </div>
  )

};

export default App;