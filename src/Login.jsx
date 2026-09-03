import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account kamyabi se ban gaya!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login ho gaye!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-50">
      <form onSubmit={handleAuth} className="bg-white p-8 rounded-xl shadow-md w-96 border">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          required
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          required
        />
        
        <button type="submit" className="w-full bg-blue-900 text-white p-3 rounded-lg font-bold hover:bg-blue-800 transition">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p 
          onClick={() => setIsSignup(!isSignup)} 
          className="text-sm text-blue-600 mt-4 text-center cursor-pointer hover:underline font-semibold"
        >
          {isSignup ? "Pehle se account hai? Login karein" : "Account nahi hai? Sign Up karein"}
        </p>
      </form>
    </div>
  );
};

export default Login;