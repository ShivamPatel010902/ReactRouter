import React from 'react'
import { NavLink , Outlet } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1>This is product page</h1>
      <input type="search" placeholder='Search...'></input>
      <nav>
      <NavLink className="linksinside" to = 'productfeature' >Product Feature</NavLink>
      <NavLink className="linksinside" to = 'newproduct' >New Product</NavLink>
      <Outlet/>
      </nav>
    </div>
  )
}