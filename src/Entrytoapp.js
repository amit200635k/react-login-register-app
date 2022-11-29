import React from 'react';
import Loginform  from './login/Loginform';
import Regform from './registration/Regform';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Overview from './dashboard/Overview';
import Inventory from './dashboard/Inventory';
import Customers from './dashboard/Customers';
import Products from './dashboard/Products';
export default function Entrytoapp() {
  
 
    
    return (
        <div>
          <Router>          
            <Routes>
              <Route exact path="/Loginform" element={<Loginform/>} />
              <Route exact path="/" element={<Regform/>} />
              <Route exact path="/Regform" element={<Regform/>} />
               <Route exact path="/Dashboard" element={<Dashboard/>} />
              <Route exact path="/Overview" element={<Overview/>} />
               <Route exact path="/Inventory" element={<Inventory/>} />
               <Route exact path="/Customers" element={<Customers/>} />
               <Route exact path="/Products" element={<Products/>} /> 
               {/*  
                */}
            </Routes>
        </Router>
        
      </div>
    )
}

