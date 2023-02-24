import React from 'react'
import { Outlet } from 'react-router-dom';
import {  useSearchParams } from 'react-router-dom';
export default function User() {
    const [activeUser , setActiveUser] = useSearchParams();
    const ActiveUser = activeUser.get('filter') ==='active';
  return (
      <>
      <div>
      <h4>user1</h4>
      <h4>user2</h4>
      <h4>user3</h4>
      <Outlet/>
    </div>
    <button className='btn' onClick={() => setActiveUser({ filter : "active" }) } > Active User</button>
    <button className='btn' onClick={() => setActiveUser({})} > Resat User</button>
    {
        ActiveUser ? "this is Active user " : " all user"
    }
      </>
    

  )
}
