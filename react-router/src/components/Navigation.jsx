import React from 'react'
import { Link , NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <nav style = {{ display: "flex",
        padding: "2rem",
        backgroundColor: "bisque",
        fontSize: "1.5rem",
        width: "95%",
        height : "10vh"}}>
      <NavLink  to = "/"   style = { { textDecoration : "none" , margin : "1.5rem"}}>Home</NavLink>
      <NavLink  to = "about"  style = { { textDecoration : "none" , margin : "1.5rem"}} >About</NavLink>
      <NavLink  to = "product"  style = { { textDecoration : "none" , margin : "1.5rem"}} >Product</NavLink>
      <NavLink  to = "contact"  style = { { textDecoration : "none" , margin : "1.5rem"}} >Contact</NavLink>
      <NavLink  to = "feedback"  style = { { textDecoration : "none" , margin : "1.5rem"}} >feedback</NavLink>
    </nav>
  )
}
