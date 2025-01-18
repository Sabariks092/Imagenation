import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Success = () => {

  const navigate = useNavigate();
  const onclick=()=>{
    navigate('/signup')
  }
  return (
    <div className='text-white mt-5 text-center' style={{height:"80vh"}}>
      <h2>Currently unavailable :(</h2>
      <p>please login from another account</p>
      <button onClick={onclick} className='promtBtn rounded-5' style={{width:"100px"}}>Signup</button>
    </div>
  )
}
