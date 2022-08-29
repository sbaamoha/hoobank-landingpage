import Image from 'next/image'
import React from 'react'
import { people01, people02, people03, quotes } from '../assets'
import Card from './Card'

const Testimonials = () => {
  return (
    <section>
        <div className='flex flex-col text-center md:flex-row md:text-start md:gap-10 gap-5 items-center leading-loose py-10'>
            <h2 className='md:text-6xl font-poppins font-bold md:flex-1 md:leading-loose'>What people are saying about us</h2>
            <p className='text-dimWhite max-w-[400px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-between items-center gap-5 '>
            <Card bg={true} paragraph="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." image={quotes} people={people01} />
            <Card paragraph="Money makes your life easier. If you're lucky to have it, you're lucky." image={quotes} people={people02} />
            <Card paragraph="It is usually people in the money business, finance, and international trade that are really rich." image={quotes} people={people03} />
        </div>
    </section>
  )
}

export default Testimonials