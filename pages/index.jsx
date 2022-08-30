import Head from 'next/head'
import Image from 'next/image'
import CardDeal from '../components/CardDeal'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'
import Handlemoney from '../components/Handlemoney'
import Hero from '../components/Hero'
import Line from '../components/Line'
import Logos from '../components/Logos'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import TrySection from '../components/TrySection'

export default function Home() {
  return (
    <div className='bg-primary text-white px-5 md:px-28'>
      <Head>
        <title>HooBank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.FAVICON}/favicon.ico`} />
      </Head> 
      <Navbar />
      <Hero />
      <Line />
      <Handlemoney/> 
      <DownloadApp/>
      <CardDeal/>
      <Testimonials/>
      <Logos />
      <TrySection/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
