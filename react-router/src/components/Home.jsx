import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate= useNavigate();
  return (
    <div>
      <h1>This is home page</h1>
      <button className='btn' onClick={() => navigate('ordersumary')} >Click to Order</button>
    </div>
  )
}
