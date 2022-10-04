import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element= {<Home/>} />
        <Route path='/services' element= {<Services/>} />
        <Route path='/products' element= {<Products/>} />
        <Route path='/sign-up' element= {<SignUp/>} />



      </Routes>
    </Router>




    

    </>
  );
}

export default App;
