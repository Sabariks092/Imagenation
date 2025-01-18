import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

export const Success = () => {
  const {user}= useContext(AppContext);

  const navigate = useNavigate();
  const onclick=()=>{
    navigate('/signup')
  }
  return (
    <div className='text-white mt-5 text-center' style={{height:"80vh"}}>
      <h2>Currently unavailable :(</h2>
      {!user &&
        <div>
          <p>please login from another account</p>
          <button onClick={onclick} className='promtBtn rounded-5' style={{width:"100px"}}>Signup</button>
        </div> }

        {user &&
        <div>
          ...
        </div>
        }
    </div>
  )
}
