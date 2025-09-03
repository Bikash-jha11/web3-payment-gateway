import React from 'react'

import sim from '../assets/sim.png'
import { HiOutlineWifi } from "react-icons/hi2";
import { FaCcMastercard } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";

function MerchantCard() {
  return (
    <div className="max-w-[30%]">
      <div className="border-4 border-blue-500 min-w-[80px] flex items-center justify-self-center my-2 rounded-sm "></div>

      <div className="p-2 my-6">
        <div className="justify-self-center max-w-[80%] min-h-[250px] flex flex-col justify-between relative z-[40] bg-white p-2">
          <div className="flex justify-between justify-items-center items-center ">
            <img src={sim} className="max-w-[30%] h-auto" />
            <HiOutlineWifi className="min-w-[10%] h-auto" />
          </div>
          <div className=''>
            <p className='font-medium text-xl'>Aduke Morewa</p>
            <p className='font-medium text-xl'>... 4567</p>
            <div className="flex justify-between justify-items-center items-center">
              <p>09/27</p>
              <FaCcMastercard />
            </div>
          </div>
        </div>

        <div className=" min-h-[500px] relative z-[30] -mt-[200px] bg-blue-background rounded-xl">
          <div className='absolute top-[50%] p-4 w-[100%] flex flex-col gap-6'>
            <div className='flex justify-between'>
              <p>company</p>
              <p className='font-medium'>Samsung</p>
            </div>
            <div className='flex justify-between'>
              <p>order no.</p>
              <p className='font-medium'>12345</p>
            </div>
            <div className='flex justify-between'>
              <p>product</p>
              <p className='font-medium'>Galaxy s23</p>
            </div>
            <div className='border-1  border-dashed'></div>
            <div className='flex justify-between items-center justify-items-center'>
              <p className='text-light'>You have to pay <p className='font-bold'>$ 200.00</p></p>
              <FaRegBookmark style={{ "font-size": '20px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MerchantCard