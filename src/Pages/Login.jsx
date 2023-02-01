import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('user',JSON.stringify(user))
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  }
  return (
    <div>
      <div className="formContainer ">
        <div className="formWrapper " >
          <span className='register'>Login</span>
          <form className='register-form' onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button className='registerBtn' type='submit'>Login</button>
          </form>

          <small style={{ margin: '10px' }}>Don't have account? <Link to='/register'>Register</Link> </small>
        </div>
      </div>
    </div>
  )
}

export default Login