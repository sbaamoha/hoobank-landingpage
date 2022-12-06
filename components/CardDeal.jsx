import Image from 'next/image'
import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className="flex flex-col md:flex-row  md:py-28 justify-between gap-10 text-center md:text-start">
        <div className="flex-1 gap-5">
            <h3 className="text-5xl font-poppins">Find a better card deal in few easy steps.</h3>
            <p className="text-dimWhite py-10 max-w-[500px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <button className=" bg-blue-gradient text-black rounded px-10 py-2 hover:opacity-80">Get Started</button>
        </div>
        <div className="flex-1">
            <Image src={card} alt="photo" layout='responsive'/>
        </div>
    </section>
  )
}

export default CardDeal
