import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { UserContextProvider } from './components/UserContext';

function App() {
  return (
    <UserContextProvider className="App">
      < Navbar />
      < AppRouter />
    </UserContextProvider>
  );
}

export default App;
