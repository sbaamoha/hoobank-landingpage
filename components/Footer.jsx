import Image from 'next/image'
import Link from 'next/link'
import { logo } from '../assets'
const Footer = () => {
  return (
    <div className='md:py-16 py-5 footer-bg '>
        <div className="flex flex-wrap pb-16">
            <div className='flex-1 mb-10 '>
                <Link href="/" >
                    <div className='w-[192px] mb-10'>
                        <Image src={logo} alt="logo" layout='responsive' />
                    </div>
                </Link>
                <div className='max-w-[250px]'>
                    <p className='text-dimWhite '>A new way to make the payments easy, reliable and secure.</p>
                </div>
            </div>

            <div className='flex justify-between md:gap-16'>
                <div>
                    <h3 className='pb-6'>Usefull Links</h3>
                    <div className="text-dimWhite flex flex-col gap-4 footerp">
                        <p>Content</p>
                        <p>How it Works</p>
                        <p>Create</p>
                        <p>Explore</p>
                        <p>Terms & Services</p>
                    </div>
                </div>


                <div className='m-auto'>
                    <h3 className='pb-6'>Community</h3>
                    <div className="text-dimWhite flex flex-col gap-4 footerp">
                        <p>Help Center</p>
                        <p>Partners</p>
                        <p>Suggestions</p>
                        <p>Blog</p>
                        <p>Newsletters</p>
                    </div>
                </div>


                <div className='flex-'>
                    <h3 className='pb-6'>Partner</h3>
                    <div className="text-dimWhite flex flex-col gap-4 footerp">
                        <p>Our Partner</p>
                        <p>Become a Partner</p>
                    </div>
                </div>
                </div>
            </div>
        <div className='border-t-2 py-6 border-gray-500'>
            <p className='text-dimWhite font-poppins'> Copyright   2021 HooBank. All Rights Reserved.</p>

        </div>
    </div>
  )
}

export default Footer