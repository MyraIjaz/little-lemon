import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import About from './components/About';


function App() {
  return (
    <>

    <Routes>
   <Route path="/" element={<Nav/>}/>
 
    </Routes>
    <Header/>
    <Main/>
    <Testimonials/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
