import Image from "next/image"
import { discount, arrowUp, robot } from "../assets"

const Hero = () => {
  return (
    <section className='py-10 flex flex-col sm:flex-row gap-5 md:relative'>
        <div className="py-20">
            <h3 className="hidden bg-discount-gradient w-[380px] rounded-lg md:flex items-center md:gap-2 font-poppins cursor-pointer">
                <Image src={discount} alt="discount" className="w-[32px]"/>
                <span className="text-white">20%</span>
                <p className="uppercase text-dimWhite">discount for</p>
                <span className="text-white uppercase">1 mounth</span>
                <p className="uppercase text-dimWhite">account</p>
            </h3>
            <h1 className="text-6xl text-white font-poppins font-bold py-8 leading-normal">
            The Next <br/>
            <span className="text-gradient">Generation</span><br/>
            Payment Method.
            </h1>

            <p className="text-dimWhite max-w-[450px]">
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.
            </p>
            <button className="text-white md:absolute top-[150px] left-[480px] w-[140px] h-[140px] text-xl h-auto font-poppins rounded-full bg-blue-gradient p-1 cursor-pointer mt-10 md:mt-0">
                 <h1 className="p-8 w-[100%] h-[100%] bg-primary rounded-full ">Get <Image src={arrowUp} alt="arrowup" /> <br/>
                 Started</h1>
            </button>
        </div>
        <div className="flex-1 ">
          <div className="relative md:my-0 my-10">
            <Image src={robot} alt="robot" layout="responsive" className="w-full h-full"/>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>
        </div>

        
    </section>
  )
}

export default Hero