'use client'
import { Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true)
    const [open, setOpen] = useState(false)

    const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
    <div className="relative">
          <Menu className="icon md:hidden" onClick={()=>setOpen(val=>!val)}/>
          <ul className={`absolute  right-0 bg-white shadow-md md:shadow-none rounded-md md:flex md:flex-row-reverse md:items-center md:static md:gap-x-10 ${!open ? 'invisible md:visible' :''}`}  >
            {
                loggedIn
                    ?  <li className="w-max min-w-full md:min-w-max py-4 px-10 md:p-0 " onClick={()=> setSubMenuOpen(val=> !val)}>
                            <Image alt='User image' className=' ml-auto mr-auto border-primary-400 padding-0 min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400' 
                                src={'/dummy/sample-profile-photo.jpg'} 
                                height={48} 
                                width={48}/>
                        </li>
                    :
                        <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center hover:scale-110 ">Log in</span>
                    </li>
            }
            

            {/* <li>
                <ul>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Profile</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Message</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Booking History</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Favorite List</li>
                </ul>
            </li> */}

            <li className=" w-max min-w-full md:min-w-max py-4 px-6 md:p-0">
                <button className="btn btn-secondary rounded-full px-6 font-semibold">Become A Host </button>
            </li>
            {/* <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center hover:scale-110 ">Switch to User</span>
                    </li> */}

            

            <li>
                <ul className="md:flex md:space-x-10">                    
                    <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Find a Property</span>
                    </li>
                    <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Tour Package</span>
                    </li>
                    <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Service</span>
                    </li>
                    
                </ul>                
            </li>

            {   loggedIn  &&
                <li>
                <ul className={`md:grid md:absolute right-4 bg-white top-12 md:shadow-md md:rounded-md 
                                    `} >                    
                    
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Message</span>
                    </li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Profile</span>
                    </li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Favorite List</span>
                    </li> 
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Booking History</span>
                    </li> 
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Switch to User</span>
                    </li> 
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Support</span>
                    </li> 
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Log Out</span>
                    </li> 
                </ul>                
                </li>
            }
            

            {/* <li>
                <ul>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Switch to User</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Find a Property</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Tour Package</li>
                </ul>
            </li> */}


            {/* <li>
                <ul>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Service</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Support</li>
                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold">Log Out</li>
                </ul>
            </li> */}
          </ul>
{/* 
          <ul className="flex items-center gap-x-12 text-neutral-500 font-medium">
            <li className="w-max">Find a Property</li>
            <li className="w-max">Tour Package</li>
            <li className="w-max">Service</li>
            <li className="w-max max-w-2xl">
              <button className="btn btn-secondary rounded-full px-6 font-semibold">Become A Host </button>
            </li>
            <li className="overflow-hidden relative min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400">
              <Image alt='user image' className='round border-primary-400 padding-0 ' src={'/dummy/sample-profile-photo.jpg'} height={48} width={48}/>
            </li>
            <li className="w-max">Log in</li>
          </ul>

           */}
        </div>
  )
}
