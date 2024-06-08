'use client'
import Image from "next/image"
import Navbar from './Navbar'


export default function Header() {
  // inline-block 
  return (
    <div className="p-4 header-shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative w-16 h-8 object-contain">
          <Image src={'/logo.png'} fill  />
        </div>
        <Navbar/>
      </div>
      

{/* // <div className=" w-full bg-white">
    //   <div className="container flex justify-between items-center p-6 mx-auto">
    //     <div className="relative w-16 h-8 object-contain">
    //       <Image src={'/logo.png'} fill  />
    //     </div>

    //     <ul className="flex items-center gap-x-10 text-neutral-500 font-medium marker-class">
    //         <li className="w-fit">Find a Property</li>
    //         <li className="w-max">Tour Package</li>
    //         <li className="w-max">Service</li>
    //         <li className="btn btn-secondary rounded-full px-6 font-semibold max-w-2xl">Become A Host </li>
    //         <li className="w-max">Log in</li>
    //       </ul> */}
        {/* <div className="flex gap-x-10 w-max items-center marker-class"> */}
          
          {/* <button className="btn btn-secondary rounded-full px-6 font-semibold">Become A Host </button>


          <div className="marker-class overflow-hidden relative min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400">
             <Image alt='user image' className='round border-primary-400 padding-0 ' src={'/dummy/sample-profile-photo.jpg'} height={48} width={48}/>
          </div> */}
        {/* </div> */}
      {/* </div> */}
        
    {/* </div> */}
    </div>

  )
}
