import React from 'react'

const Line = () => {
  return (
    <section className='text-white flex justify-evenly pb-10'>
        <div className='flex flex-col md:flex-row items-center gap-2 text-xl'>
            <h2 className='font-bold'>3800+</h2>
            <p className="uppercase text-sm text-gradient font-poppins">User Active</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-2 text-xl'>
            <h2 className='font-bold'>280+</h2>
            <p className="uppercase text-sm text-gradient font-poppins">trusted by company</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-2 text-xl'>
            <h2 className='font-bold'>$230M+</h2>
            <p className="uppercase text-sm text-gradient font-poppins">transaction</p>
        </div>
        
    </section>
  )
}

export default Line