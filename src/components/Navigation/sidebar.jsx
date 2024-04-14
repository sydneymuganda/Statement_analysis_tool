import React from 'react';
import {BiHome,BiMoney} from 'react-icons/bi'
import { FcMoneyTransfer } from "react-icons/fc";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { GiWallet, GiExpense } from "react-icons/gi";
import { Link } from 'react-router-dom';
import "../../styles/sidebar.css";
import { CiHome } from "react-icons/ci";


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
                <CiHome   className='icon'/> Home
                </Link>

                <Link to="/cashflow" className='item'>
                <GiWallet  className='icon'/> Cash Flow 
                </Link>

                <Link to="/bank" className='item'>
                <CiBank className='icon' /> Bank Summary
                </Link>
                <Link to="/agent" className='item'>
                <MdOutlineRealEstateAgent className='icon'/> Agent Transactions
                </Link>
                <Link to="/bills" className='item'>
                <GiExpense className='icon'/> Bills 
                </Link>
                <Link to="/loans" className='item'>
                <BiMoney className='icon' /> Loans 
                </Link>
                <Link to="/transfers" className='item'>
                <FcMoneyTransfer  className='icon'/> Money Transfers 
                </Link>
            </div>
            
        </div>


        );
        
    
};

export default Sidebar;