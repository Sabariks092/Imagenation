import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

export const Generate = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageloaded, setisImageloaded] = useState(null);
  const [Imageloading, setisImageloading] = useState(false);
  const [input, setInput] = useState('');

  const navigate = useNavigate();


  const { generateImage, user } = useContext(AppContext)

  const handleGenerateAnother = () => {
    setImage(assets.sample_img_1);
    setisImageloaded(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisImageloading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setisImageloaded(true);
        setImage(image)
      }
    }
    setisImageloading(false);
  }

  return (
    <>
      {!Imageloading &&
        <div action=""
          style={{ width: "100%", height: "100vh" }}
          className="d-flex mt-0 justify-content-center align-items-center">
          <form
            onSubmit={handleSubmit}
            action=""
            style={{ width: "100%", height: "100vh" }}
            className="d-flex  justify-content-center align-items-center"
          >
            <div className='d-flex mt-0 text-white mx-auto justify-content-center justify-items-center row text-center align-items-center'>
              {!isImageloaded ? <h5 className='mb-4'>❝ A Cute Piggy with Wings ❞</h5> : <h5 className='mb-4'>❝ {input} ❞</h5>}

              <div className='d-flex justify-content-center align-items-center'>
                <img width={350} className='mb-4 rounded' style={{ border: "1px solid white", boxShadow: "2px 2px 16px " }} src={image} alt="" />
              </div>
              <div></div>

              {user ? <div>
                {!isImageloaded && <div>
                  <input onChange={e => setInput(e.target.value)} value={input} style={{ border: " 2px solid white " }} type="text" className='rounded-5 p-2 px-5' placeholder='Enter your ideas Here' />
                  <button type='submit' className='promtBtn rounded-5'>Generate</button>
                </div>}
              </div> :
                <button onClick={() => navigate('/login')} className='promtBtn rounded-5 w-50'>
                  Please Login
                </button>}
              {isImageloaded && <div className='m-3'>
                <div>
                  <button onClick={handleGenerateAnother} className='promtBtn me-2 rounded-5 p-2 px-3'>Generate Another</button>
                  <a href={image} download style={{ backgroundColor: "white", border: " 2px solid white ", color: "black", textDecorationLine: "none" }} className='rounded-5 p-2 px-5'>Download</a>
                </div>
                <div>
                  <button onClick={() => navigate('/pricing')} style={{ backgroundColor: "black", border: "2px solid white" }} className='text-white mt-3 rounded-5 p-2 px-3'>Buy More Credits</button>
                </div>
              </div>}
            </div>
          </form>
        </div>}
      {Imageloading &&
        <div>
          <div className='loader-wrapper'>
            <div className='loader'>
            </div>
            <div className='text-white mt-3'><p>Your image is loading...</p></div>
          </div>

        </div>}
    </>
  )
}
