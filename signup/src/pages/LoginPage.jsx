import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const auth = getAuth();
    try {
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      let res = await signInWithEmailAndPassword(auth, email, password);
      // Signed in successfully
      console.log(res);
    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default LoginPage;
