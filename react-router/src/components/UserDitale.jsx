import React from 'react';
import { useParams } from 'react-router-dom';
export default function Productfeature() {
  const params = useParams()
  const userId = params.userId;
  return (
   <>
   <h1>This User Ditale page of user  {userId}</h1>
  
   </>
    
  )
}