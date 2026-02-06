import React, { useState } from 'react'

const DepositsRecords = () => {
  const [show,setshow]= useState(false)
  return (
    <div className='py-[70px]'>
      <div className='bg-black/5 p-4 rounded'>
      <div className='bg-white border border-[1px solied black] w-full h-[200px] rounded p-2 mb-8'>

      </div>
            <div className='bg-blue-800 border border-[1px solied black] w-full h-[200px] rounded p-2 mb-8'>

      </div>

                  <div className='bg-blue-800 border border-[1px solied black] w-full h-[200px] rounded p-2'>

      </div>

      </div>
            <div className='text-center'>
        {show ?         
        <h1  className='text-1xl font-bold'>No More data.</h1>:
        <h1 className='text-1xl font-bold'>Data Not found.</h1>
         }
      </div>

    </div>
  )
}

export default DepositsRecords
