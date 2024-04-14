import React from 'react'
import { FaRegMoon ,FaBell} from "react-icons/fa6";
import '../../styles/nav.css'
const Navbar = () => {
  return (
    <div  className='w-full '>
     <nav className='nav'>
        Navbar
        
        <div className=' text-white'><FaRegMoon/></div>
        <div className=' text-white'><FaBell/></div>
        
     </nav>
   </div>
  )
}

export default Navbar