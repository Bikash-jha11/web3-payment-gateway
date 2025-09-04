import React from 'react'
import logo from '../assets/logo.png'


import { IoAddCircleSharp } from "react-icons/io5";

function PaymentCard() {
    return (
        <div className='border-2 '>

            <div className='p-4 w-[50%]'>
                {/* logo section */}
                <div className='flex gap-4  items-center'>
                    <img src={logo} className='w-[50px] h-auto border-none rounded-full p-1 bg-blue-background ' />
                    <div className='flex jusitify-center items-center gap-1'>
                        <p className='font-medium text-xl'>Meiran</p><p className=' text-xl'>pay</p>
                    </div>
                 </div>

                 {/* details_section */}
                 <div className="flex flex-col items-start mt-4 gap-4">
                     {/* publickey detail */}
                     <div className="flex flex-col gap-2 w-full">
                        <p className='font-medium text-lg'>Public Key</p>
                        <p className='text-light'>Enter your 32 bit public key.</p>
                        <div className=' rounded-xl h-[60px] p-2 bg-blue-background flex justify-between items-center'>
                             <p>1 2 3 4</p> 
                             <IoAddCircleSharp style={{'font-size':'40px','color':'purple'}}/>
                        </div>
                     </div>
                     {/* coin detail */}
                      <div className="flex  gap-8 items-center w-full">
                        <div className="flex flex-col w-full">
                            <p className='font-medium text-lg'>Select Coin</p>
                        <p className='text-light'>Select currency you want to transfer from</p>
                        </div>
                        
                        <div className=' rounded-xl h-[60px] p-2 bg-blue-background flex justify-between items-center w-full'>
                             <p>1 2 3 4</p> 
                             <IoAddCircleSharp style={{'font-size':'40px','color':'purple'}}/>
                        </div>
                     </div>

                 </div>
            </div>
        </div>
    )
}

export default PaymentCard