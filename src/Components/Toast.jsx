import React from 'react'

import toast, { Toaster } from 'react-hot-toast';

function Toast() {

    const notify = () => {
        toast.success("Add to cart");  
    };

    
  return (
    <div className="container mx-auto">
        <button  onClick={notify} className='bg-blue-500 px-3 p-2 text-white hover:bg-blue-400'>Show</button>
        <Toaster
        position="top-right"
        reverseOrder={false}
        />
    </div>
  )
}

export default Toast