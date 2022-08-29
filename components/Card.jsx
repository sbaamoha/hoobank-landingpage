import Image from "next/image"
const Card = ({people, paragraph, image, bg}) => {
  return (
    <div className={`rounded-3xl px-6 py-12 flex-1 md:h-[395px] ${bg && `bg-discount-gradient`}`}>
                <div className='w-[42px] h-[28px] mb-6'>
                <Image src={image} alt="quotes" layout='responsive' objectFit='cover'/>
                </div>
                <p className="py-8">{paragraph}</p>
                <div className="flex">
                    <Image src={people} alt="people" layout='responsive' objectFit='cover' />
                    <div>
                        <h3 className='font-poppins'>Herman Jensen</h3>
                        <p className="text-dimWhite">Founder & Leader</p>
                    </div>
                </div>
     </div>
  )
}

export default Card