import logo from './logo.svg';
import React from 'react';
import {Routes , Route} from  'react-router-dom';
import Home from './components/Home';
import './App.css';
import Navigation from './components/Navigation';
import Feedback from "./components/Feedback"
import Product from './components/Product'
import Contact from "./components/Contact"
import OrderSumary from './components/OrderSumary';
import Notfound from './components/Notfound';
import ProductFeature from './components/ProductFeature';
import NewProduct from "./components/NewProduct";
import User from './components/User';
import UserDitale from './components/UserDitale'
import Admin from './components/Admin';
const LazyAbout = React.lazy(() => import('./components/About') );
function App() {
  return (
    <>
    <Navigation/>
     <Routes>
       <Route path="/" element= {<Home />}/>
       <Route path="about" element= {<React.Suspense fallback="l" ><LazyAbout /></React.Suspense>}/>
       <Route path="contact" element= {<Contact />}/>
       <Route path="product" element= {<Product />}>
         <Route path='productfeature' element = {<ProductFeature/>}/>
         <Route path='newproduct' element = {<NewProduct/>}/>
       </Route>
       <Route path="feedback" element= {<Feedback />}/>
       <Route path="ordersumary" element= {<OrderSumary />}/>
       <Route path="*" element= {<Notfound/>}/>
       <Route path='user' element={<User/>}>
       <Route path=':userId' element={<UserDitale/>}/>
       <Route path='admin' element={<Admin/>}/>
       </Route>
       
     </Routes>
    </>
  );
}

export default App;
