import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import local style file 
import './Navbar.css';
// import navbar button to Login page navigate  
import Login from '../page/Login';

// icon import 
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

   const [openmodule, setOpenmodule] = useState(false);
 
    const togglebtn = ()=>{
        setOpenmodule(true);
    }


   let navigate = useNavigate( <Login />)
  return (
    <>
         <nav className='navbar-main'>
              <div className="nav-logo">
                  <h2>shoplocal </h2>
              </div>
        <div className={`nav-manu ${!openmodule ? "manu-open" : "nav-manu"}`}>
          <ul>
            <li><Link to="/home">home</Link> </li>   
            <li> <Link to="/about">about</Link>    </li>
            <li> <Link to="/product">Product</Link>    </li>
            <li> <Link to="/contact">contact</Link> </li>   
                    </ul>
              </div>
              <div className="nav-login">
          <button className='login-btn' onClick={()=>{
            navigate('/Login')
          }}>Login</button>
          <button className='nav-open-close' onClick={() => {setOpenmodule(!openmodule)}}>{ 
            openmodule ? <IoClose /> : <FaBars />
          }</button>
              </div>
         </nav>
             
    </>
  )
}

export default Navbar
