import React,{useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [clickhambur,setClickhambur]=useState(true)
  function onclickmenu(){
    setClickhambur(!clickhambur)
  }
  useEffect(()=>{
    const handleResize = ()=>{
      setClickhambur(true)
    }
    
    window.addEventListener('resize',handleResize)
    return () => {
    window.removeEventListener('resize', handleResize)
  }
  
  },[])



  
  return (
    <div className='nav-container'>
      <div className='header'>
        <Link to={'/'}>
          <h1>Portfolio.</h1>
        </Link>
      </div>
      <div className={clickhambur ? "nav-menu" : "nav-menu  active"}>
        <ul>  
          <li onClick={onclickmenu} ><Link to={'/'}>Home</Link></li>
          <li onClick={onclickmenu}><Link to={'/about'}>about</Link></li>
          <li onClick={onclickmenu}><Link to={'/project'}>project</Link></li>
          <li onClick={onclickmenu}><Link to={'/contact'}>contact</Link></li>
          
        </ul>
      </div>
      <div className="ham-menu" onClick={onclickmenu}>
        {
          clickhambur ? <GiHamburgerMenu size="32px" color="white" /> : <AiOutlineClose size="32px" color="white" />
        }
      </div>
    </div>
  )
}

export default Navbar