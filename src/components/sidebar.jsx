import React from 'react';
import {BiHome,BiMoney} from 'react-icons/bi'
import { FcMoneyTransfer } from "react-icons/fc";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { GiWallet, GiExpense } from "react-icons/gi";
import { Link } from 'react-router-dom';
import "../styles/sidebar.css";

const Sidebar =()=> {
    
        return (
        
        
        <div className='menu'>
            <div className='logo'>
                <a href='https://satdocs.tausi.africa/'>
                <BiHome className='logo-icon'/>
                </a>
                <h2>TAUSI SAT Dashboard</h2>
            </div>

            <div className='menu--list'>
                <Link to="/" className='item'>
                <GiWallet  className='icon'/> Cash flow 
                </Link>

                <Link to="/bank" className='item'>
                <CiBank className='icon' /> bank summary
                </Link>
                <Link to="/agent" className='item'>
                <MdOutlineRealEstateAgent className='icon'/> agent transactions
                </Link>
                <Link to="/bills" className='item'>
                <GiExpense className='icon'/> Bills 
                </Link>
                <Link to="/loans" className='item'>
                <BiMoney className='icon' /> Loans 
                </Link>
                <Link to="/transfers" className='item'>
                <FcMoneyTransfer  className='icon'/> money transfers 
                </Link>
            </div>
            
        </div>


        );
        
    
};

export default Sidebar;