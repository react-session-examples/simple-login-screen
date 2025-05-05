import React, { useState } from 'react'

// Components.
import { ErrorHandler } from '@app/components'

function App() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setLoginResult] = useState('');
  return (
    <>
      <ErrorHandler>
        <h1>Welcome to Simple Login Screen</h1>
        <input type="text" name="username" onChange={event => {
          setUsername(event.target.value);
        }} placeholder="User name" value={userName} />
        <input type="password" name="password" placeholder="Password" onChange={event => {
          setPassword(event.target.value);
        }} value={password} />
        <input type="submit" value="Login" onClick={event => {
          if (userName === 'demo' && password === 'demo') {
            setLoginResult('Success');
          } else {
            setLoginResult('Invalid Login');
          }
        }} />

        <div>
          {userName && `Your username is ${userName}`}<br />
          {password && `Your passwod is ${password}`}<br />
          <h3>{result}</h3>
        </div>
      </ErrorHandler>
    </>
  )
}

export default App
