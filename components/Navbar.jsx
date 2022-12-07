import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {logo , menu , close} from "../assets"
import { navbar } from "../const";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [isActive, setisActive] = useState("home");

  const renderLinks = () => {
    
  }

  return (
    <>
    <nav className='flex justify-between items-center py-5'>

        <div className="w-32 cursor-pointer">
          <Link href='/'>
            <Image src={logo} alt="HooBank" objectFit="cover" className="w-full h-full"/>
          </Link>
        </div>
        <ul className="text-dimWhite gap-8 cursor-pointer hidden sm:flex">
          {navbar.map((item) => (
              <button 
              onClick={(() => setisActive(item.name)
              
              )} 
              key={item.id} 
              className={`${isActive === item.name ? `active-link` : `text-dimWhite`} hover:text-dimWhite capitalize`} 
              >
               <Link href={`#${item.slug}`}>
                <h3>{item.name}</h3>
               </Link>
              </button>
          ))}
          
        </ul>
        <div className="sm:hidden cursor-pointer" onClick={() => setmenuOpen(prev => !prev)}>
          <Image src={menuOpen ? close : menu} alt="menu icon" objectFit="cover" />
        </div>
    </nav>
        {menuOpen && <ul className="text-dimWhite gap-8 cursor-pointer flex flex-col justify-center items-center">
        {navbar.map((item) => (
          <Link 
            key={item.id} 
            href={`#${item.slug}`}
            >
            <h3 
              onClick={() => {
                setisActive(item.name)
                setmenuOpen(false)
                }
              }
              className={`${isActive === item.name ? `active-link`: ``} capitalize`}>{item.name}</h3>
          </Link>
          ))}
        </ul>
        }
    </>
  )
}

export default Navbar
