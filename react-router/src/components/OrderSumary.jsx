import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function OrderSumary() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Order Sumary</h1>
      <button className='btn' onClick={() => navigate(-1)} >back to Home</button>
    </div>
  )
}
