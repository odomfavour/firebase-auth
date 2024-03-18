import React, { useState } from 'react';
import firebase from './Component/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function SignInWithEmailPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      await signInWithEmailAndPassword(email, password)
      // Signed in successfully
    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInWithEmailPassword;
