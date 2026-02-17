import React from 'react'
import {assets} from '../assets/assets'

const Invest = () => {
  return (
    <div className='py-[70px]'>
            <h1 className=' text-[20px] font-bold text-center'>Investment Offers</h1>

            <div className='p-2 mx-2 my-4 rounded  plans bg-slate-0 shadow-lg'>
              <div className='flex justify-around items-center'>
                <img className='h-[150px] w-[200px] rounded' src={assets.bike} alt="" />
                <h2 className='text-blue-800 font-bold'>8% / Per Day</h2>
              </div>


              <div>
                <h1 className='text-1xl pl-2 mr-[100px] font-bold'>Honda 70 Bike 2026 Pakistan 1 Day Hot 🔥 Offer</h1>
                <p className='pl-2 py-1 text-[0.6rem] font-bold'>Only 1 Time invested / 1 day offer</p>
                <div className='flex justify-between items-center p-2'>
                 <h1 className='font-bold'>1000-1000 RS</h1>
                 <button className='text-[0.7rem] font-bold bg-indigo-800 text-white px-6 py-3 rounded-full'><i class="fa-solid fa-lock"></i> &nbsp; Locked</button>
                </div>
              </div>



              <div>
                <div className='px-2'>
                <hr />
                  <h2 className='text-blue-800 text-[15px] font-bold pr-5'>You can invest in 1 day offer between 5pm-6pm daily.</h2>
                  <p className='text-blue-800 mt-1 text-[0.6rem] font-bold'>150k People invested</p>
                </div>
              </div>
            </div>

            <div className='p-2 mx-2 my-4 rounded plans bg-slate-0 shadow-lg'>
              <div className='flex justify-around items-center'>
                <img className='h-[150px] w-[200px] rounded' src={assets.back_view} alt="" />
                <h2 className='text-blue-800 font-bold'>3.5% / Per Day</h2>
              </div>


              <div>
                <h1 className='text-1xl pl-2 mr-[100px] font-bold'>Suzuki Alto VXR 2026 Price in Pakistan 31.4 lacs 3 Day Hot 🔥 Offer</h1>
                <p className='pl-2 py-1 text-[0.6rem] font-bold'>Only 2 Times invested / 3 days offer</p>
                <div className='flex justify-between items-center p-2'>
                 <h1 className='font-bold'>1000-5000 RS</h1>
                 <button className='text-[0.7rem] font-bold bg-indigo-800 text-white px-6 py-3 rounded-full'>Invest Now</button>
                </div>
              </div>



              <div>
                <div className='px-2'>
                <hr />
                  <h2 className='text-blue-800 text-[15px] font-bold pr-5'>A User can subscribe 3 days offer only 2 Times</h2>
                  <p className='text-blue-800 mt-1 text-[0.6rem] font-bold'>50k People invested</p>
                </div>
              </div>
            </div>


    </div>
  )
}

export default Invest
