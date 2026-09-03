import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './Navbard/Navbar';
import Home from './Home';
import About from './Navbard/About';
import All from './All';
import Cart from './Cart';
import Login from './Login';
import Dashboard from './Dashboard';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]); // <-- Cart State

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Product cart mein add ho gaya!");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar user={user} cartCount={cart.length} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/All' element={<All addToCart={addToCart} />} /> {/* <-- Prop pass kiya */}
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='/login' element={user ? <Dashboard /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;