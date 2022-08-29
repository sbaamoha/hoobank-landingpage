import Image from 'next/image'
import { airbnb, dropbox, binance, coinbase } from "../assets"

const Logos = () => {
  return (
    <section className='flex md:py-14 md:justify-between flex-wrap items-center gap-16 md:gap-0 ' >
        <div className='w-[192px] h-[60px]'>
            <Image src={airbnb} alt='airbnb' layout='responsive' />
        </div>    
        <div className='w-[192px] h-[60px]'>
            <Image src={binance} alt='binance' layout='responsive' />
        </div>    
        <div className='w-[192px] h-[60px]'>
            <Image src={coinbase} alt='coinbase' layout='responsive' />
        </div>    
        <div className='w-[192px] h-[60px]'>
            <Image src={dropbox} alt='dropbox' layout='responsive' />
        </div>
    
    </section>
  )
}

export default Logos