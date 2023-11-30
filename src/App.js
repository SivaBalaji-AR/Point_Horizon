import './App.css';
import Home from './home';
import SeatBook from './seatBooking'
import BusList from './buslist'
import { UserProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import { UserProviders } from './UserContext';


function App() {
  return (
    <UserProviders>
    <UserProvider>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/hc" element={<HomeComponent />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/train" element={<Home />}/>
        <Route path="/flight" element={<Home />}/>
        <Route path="/busList" element={<BusList />}/>
        <Route path="/seatBook" element={<SeatBook />}/> 
        </Routes>
    </BrowserRouter>
   </UserProvider>
   </UserProviders>
  );
}

export default App;
