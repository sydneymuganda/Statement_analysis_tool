import React from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Agent from './components/pages/agent';
import Bank from './components/pages/bank';
import Bills from './components/pages/bills';
import Cashflow from './components/pages/cashflow';
import Loans from './components/pages/loans';
import Transfers from './components/pages/moneyTransfer';
import "./App.css";
import {data} from "./Data/data";
import Login from './components/pages/Login';
import Sidebar from './components/Navigation/sidebar';
import Navbar from './components/Navigation/Navbar';




function App() {
 

  return ( 
    
    <Router>
      <div className='dashboard'>
      
        <Sidebar />
        <div className='flex flex-col'>
        {/* <Navbar/> */}
        <div className="content">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/cashflow" element={<Cashflow />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        </div>
        </div>
      </div>
    </Router>
    

  
  )
}

export default App
