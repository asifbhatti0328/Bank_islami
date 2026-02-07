import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const DepositsRecords = () => {
  const [show, setshow] = useState(true)
  return (
    <div className='py-[70px]'>

      <div className='flex h-[2rem] pl-2 mb-5 w-[70%] items-center justify-between'>
        <NavLink to={'/'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-[1.1rem] font-bold text-black'>Deposit Records</h1>
      </div>


      <div className='bg-black/5 p-2 rounded'>



        <div className='bg-white flex flex-col justify-between border border-[1px solied black] w-full h-[200px] rounded p-3'>
          

            <div className='flex items-center justify-between'>
              <p className='font-bold'>Deposit Amount</p>
              <p className='font-bold text-yellow-500'>2500</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold'>Bank Name</p>
              <p className='font-bold text-yellow-500'>JazzCash</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold'>Accout Holder</p>
              <p className='font-bold text-yellow-500'>Muhammad Asif</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold'>Account Number</p>
              <p className='font-bold text-yellow-500'>03286696596</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold'>Date</p>
              <p className='font-bold text-yellow-500'>07 Feb 2026 10:59 AM</p>
            </div>

            <div className='flex items-center justify-between'>
              <p className='font-bold'>Status</p>
              <p className='font-bold text-yellow-500'>Pending</p>
            </div>

        

        </div>









      </div>
      <div className='text-center pt-2'>
        {show ?
          <h1 className='text-1xl font-bold'>NO more data.</h1> :
          <h1 className='text-1xl font-bold'>Data Not found.</h1>
        }
      </div>

    </div>
  )
}

export default DepositsRecords
