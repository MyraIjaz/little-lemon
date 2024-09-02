import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';


function App() {
  return (
    <>

    <Routes>
   <Route path="/" element={<Nav/>}/>
 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
