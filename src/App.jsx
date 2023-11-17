import React from 'react';
import { getToken } from './utility/TokenHelper';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductListPage from "./pages/ProductListPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import UserLoginPage from "./pages/UserLoginPage.jsx";
import OTPPage from "./pages/OTPPage.jsx";
const App = () => {
 
    if(getToken()){
      return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={ProductListPage}/>
              <Route path="/cart" element={CartListPage}/>
          </Routes>
        </BrowserRouter>
      )
    }else{
      return (
        <BrowserRouter>
          <Routes>
              <Route path="" element={ProductListPage}/>
              <Route path="" element={UserLoginPage}/>
              <Route path="" element={OTPPage}/>
          </Routes>
        </BrowserRouter>
        )
    }
 
};

export default App;