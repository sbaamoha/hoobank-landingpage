import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {logo , menu , close} from "../assets"
import { navbar } from "../const";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [isActive, setisActive] = useState("Home");

  return (
    <>
    <nav className='flex justify-between items-center py-5'>

        <div className="w-32 cursor-pointer">
            <Image src={logo} alt="HooBank" objectFit="cover" className="w-full h-full"/>
        </div>
        <ul className="text-dimWhite gap-8 cursor-pointer hidden sm:flex">
          {navbar.map((item) => (
              <button 
              onClick={(() => setisActive(item.name)
              
              )} 
              key={item.id} 
              className={`${isActive === item.name ? `text-white` : `text-dimWhite`}hover:text-dimWhite`} 
              >
               <Link href="/"  >
                <h3>{item.name}</h3>
               </Link>
              </button>
          ))}
          
        </ul>
        <div className="sm:hidden cursor-pointer" onClick={() => setmenuOpen((prev) => !prev)}>
          <Image src={menuOpen ? close : menu} alt="menu icon" objectFit="cover" />
        </div>
    </nav>
        {menuOpen &&  <ul className="text-dimWhite gap-8 cursor-pointer flex flex-col justify-center items-center">
          <Link href="/">
            <h3 className="text-white">Home</h3>
          </Link>
          <Link href="/">
            <h3>About Us</h3>
          </Link>
          <Link href="/">
            <h3>Features</h3>
          </Link>
          <Link href="/">
            <h3>Solution</h3>
          </Link>
        </ul>
        }
    </>
  )
}

export default Navbar
