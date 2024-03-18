import React, { useState } from 'react';
import firebase from './firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

function SignUpWithEmailPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(email, password)
    const auth = getAuth()
    try {
        
        const response = await createUserWithEmailAndPassword(auth, email, password)
        alert('exactly')
        console.log(response)
    //   await firebase.auth().signInWithEmailAndPassword(email, password);
        // await firebase.auth().c(email, password)
      // Signed in successfully
    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
    }
  };

  return (
    <div>
        <form action="" onSubmit={handleSignIn}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type='submit'>Sign In</button>
        </form>
    </div>
  );
}

export default SignUpWithEmailPassword;
