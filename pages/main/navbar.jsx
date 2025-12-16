import React, { useState, useRef, useCallback } from "react"
import Link from "next/link";
import useMangaSearch from '../useMangaSearch'

const Navbar = () => {
  return (  
<>   
  <div className="topnav">
    
      <Link href='/'>
      <h1 className="title">
      MangaSwap
      </h1>
      </Link>
      
      
      
      
      <ul className="row d-flex">
        <li>
       <Link href='../user-pages/community' className="ul">Community</Link>
       </li>
       <li>
       <Link href='../user-pages/profile' className="ul">Profile</Link>
       </li>
       <li>
       <Link href='../user-pages/cart'className="ul">Cart</Link>
       </li>
       <Link href='../user-pages/addManga'>
        Add Manga 
       </Link>
       </ul>
      
      
      
    
      
     
      <Link href={ "../pages/main/searchpage.jsx"}><button className="search-btn" > Search</button></Link>
      
      </div>
      </>
    )
}
export default Navbar;
