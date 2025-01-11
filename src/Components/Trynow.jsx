import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const Trynow = () => {

    const navigate=useNavigate();
    return (
        <div className='d-flex text-white flex-column align-items-center mt-0 mx-auto' style={{ height: '50vh' }}>

            <h3 className='text-center text-white mb-'>Try now</h3>
            <p>Explore your extrordinary ideas with us !</p>
            <button 
            onClick={()=>navigate('/generate-image')}
                style={{ backgroundColor: 'black', color: 'white', width: '300px' }} 
                className='promtBtn rounded-5 d-flex align-items-center justify-content-center'
            >
                Generate your prompt 
                <img 
                    style={{ height: '25px', width: '30px', marginLeft: '10px' }} 
                    src={assets.star_group} 
                    alt="" 
                />
            </button>
        </div>
    );
};
