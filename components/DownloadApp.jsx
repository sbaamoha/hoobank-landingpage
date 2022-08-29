import Image from "next/image"
import { bill } from "../assets"
const DownloadApp = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-start">
        <div className="flex-1 order-2 gap-5 md:pt-12">
            <h3 className="text-5xl font-poppins">Easily control your billing & invoicing.</h3>
            <p className="text-dimWhite py-10 max-w-[500px]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
         </div>
        <div className="flex-1 flex flex-col">
          <Image src={bill} alt="paypal payment" layout="responsive" objectFit="contain"/>
        </div>
    </section>
  )
}

export default DownloadApp