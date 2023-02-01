import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import {json, Link, useNavigate} from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore";

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                localStorage.setItem('user',JSON.stringify(user))
                // ...
                navigate('/')

                await setDoc(doc(db, "users", user.uid), {
                    uid:user.uid,
                    displayName:name,
                    email,
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                // ..
            });
    }
    return (
        <div>
            <div className="formContainer ">
                <div className="formWrapper " >
                    <span className='register'>Register</span>
                    <form className='register-form' onSubmit={handleSubmit}>
                        <input className='p-10' type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        <button className='registerBtn' type='submit'>Register</button>
                    </form>

                    <small style={{margin:'10px'}}>Already have account? <Link to='/login'>Login</Link> </small>
                </div>
            </div>
        </div>
    )
}

export default Register