import React from 'react'
import Sidebar from './components/sidebar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Agent from './components/pages/agent';
import Bank from './components/pages/bank';
import Bills from './components/pages/bills';
import Cashflow from './components/pages/cashflow';
import Loans from './components/pages/loans';
import Transfers from './components/pages/moneyTransfer';
import "./App.css";
import {data} from "./Data/data";



function App() {
 

  return ( 
    
    <Router>
      <div className='dashboard'>
        {console.log(data)}
        <Sidebar />
        <div className="content">
        <Routes>
         
          <Route path="/" element={<Cashflow />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/transfers" element={<Transfers />} />
        </Routes>
        </div>
      </div>
    </Router>
  
  )
}

export default App
