import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';  // Import the new Layout component
import Main from './components/Main';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
    <>
     <Routes>
        {/* Route for Home Page with Full Layout */}
        <Route 
          path="/" 
          element={
            <Layout>
              {/* You can add extra components or elements here if needed */}
            </Layout>
          } 
        />
        
        {/* Route for Reservation Page with only Nav, ReservationForm, and Footer */}
        <Route 
          path="/reservations" 
          element={
            <>
              <Nav />
              <ReservationForm />
              <Footer />
            </>
          } 
        />
    
      <Route path="/orderonline"
      element={
        <>
        <Nav/>
        <OrderOnline/>
        <Footer/>
        </>
      }
      />
        <Route path="/login"
      element={
        <>
        <Login/>
</> }
      />
    </Routes>
    
    </>
   
   
  );
  
}

export default App;