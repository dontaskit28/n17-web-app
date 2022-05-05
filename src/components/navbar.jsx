import React, {useState} from 'react';
import '.././App.css'
import {Link} from 'react-router-dom'
import Details from '.././details'

function Navbar()  {

  const [id,setId]  = useState('')
  
  return(
    <nav>
      <form onSubmit={onsubmit}>
        <input type="search" className="inputField" placeholder=" Search Here" value={id} onChange={(e)=>
          setId(e.target.value)}></input>
        <Link to= {`/search/${id?id:"dontsearchit"}`}><button className="search-btn">SEARCH</button></Link>
      </form>
      <ul>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/cse"><li>CSE</li></Link>
        <Link to="/ece"><li>ECE</li></Link>
        <Link to="/me"><li>MECH</li></Link>
        <Link to="/ce"><li>CIVIL</li></Link>
        <Link to="/mme"><li>MME</li></Link>
        <Link to="/che"><li>CHEM</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar;