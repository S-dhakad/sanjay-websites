import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
const [dark,setdark]=useState(true)
const [bars,setbars]=useState(true)
 const ref = useRef();

const handledarkmode = ()=>{
  setdark(!dark);
  document.body.classList.toggle('darkmode');
}
 const bardhandle = ()=>{
  setbars(!bars);
  ref.current.classList.toggle("ulview");
 }

  return (
    <>
    <nav className='desktop-nav'>

    <h1 class="logo">
      <Link class="logo-1" to="/">Code with Mr S.D</Link></h1>
      <div className="menu">
<li> <Link onClick={()=>handledarkmode()} > <i  className={dark?'fas fa-sun  fa-lg':"fad fa-moon-stars fa-lg"}></i></Link></li>
  <li> <Link onClick={()=>bardhandle()} > <i   className={bars?'fas fa-bars fa-lg':"fad fa-times-circle fa-lg"}></i></Link></li>

  </div>
<div className="sidenavbar">

  <ul>
  <li> <Link  className='icon' onClick={()=>handledarkmode()} > <i  className={dark?'fas fa-sun  fa-lg':"fad fa-moon-stars fa-lg"} ></i></Link></li>

    <li onClick={()=>bardhandle()} > <Link to="/"> About Me</Link></li>
    <li onClick={()=>bardhandle()} > <Link to="/Resume"> Skill</Link></li>
    <li onClick={()=>bardhandle()} > <Link to="/"> Projects</Link></li>
    <li onClick={()=>bardhandle()} > <Link to="/Contact">Contact </Link></li>
  </ul>

</div>

    </nav>
    
    <div className="responsiven-nav" ref={ref}>

  <ul>
  
    <li onClick={()=>bardhandle()} > <Link to="/"> About Me</Link></li>
    <li onClick={()=>bardhandle()} > <Link to="/Resume"> Skill</Link></li>
    <li onClick={()=>bardhandle()} > <Link to="/"> Projects</Link></li>
    <li onClick={()=>bardhandle()} > <Link to="/Contact"> Contact</Link></li>
  </ul>

</div>
    
    
    </>
  )
}

export default Navbar