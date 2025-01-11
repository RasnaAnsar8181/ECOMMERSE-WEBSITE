import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/js/Products';
import Contact from './components/js/contact';
import SignUp from './components/js/signup';
import EachCategory from './components/js/eachCategory';
import Login from './components/js/login';
import Navbar1 from './Navbar';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/js/ShoppingCart';
import Payment from './components/js/Payment';
import DeleteCart from './components/js/DeleteCart';


function App() {
    
    return ( 
        <Router>
           <Navbar1 />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/Contact" element={<Contact />} />                                      
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path='/EachCategory' element={<EachCategory />} />
                    <Route path='/Payment' element={<Payment />} />
                    <Route path='/DeleteCart' element={<DeleteCart />} />
                    <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
                </Routes>
            </div>
        </Router>
    );
}
export default App
