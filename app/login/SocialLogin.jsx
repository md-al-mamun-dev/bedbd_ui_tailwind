import Image from "next/image"
import googleIcon from '@/public/icons/google.png'
import facebookIcon from '@/public/icons/facebook.png'
import appleIcon from '@/public/icons/apple.png'


export default function SocialLogin() {
  return (
    <div className='w-full max-w-lg mt-5 | relative-x-center '>
        <div className='w-full relative  custom-bg-line-300 '>
            <h3 className='text-neutral-300 bg-white text-xs font-semibold px-4 ml-8 w-fit '>Or Continue With</h3>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-7' >
            <button className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
                <Image src={googleIcon} height={24} width={24}/>Google
            </button>
            <button className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
                <Image src={facebookIcon} height={24} width={24}/>Google
            </button>
            <button className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
                <Image src={appleIcon} height={24} width={24}/>Google
            </button>
        </div>
    </div>
  )
}
