import SocialLogin from '../SocialLogin'
import Icon from '@/app/components/Icon'

export default function EmailLogin() {
    return (
        <div className='modal-background'>
            <div className='pt-20 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Login</h3> 
                <form  className='w-full max-w-lg mb-5  | relative-x-center'>

                    <div className='flex flex-col sm:flex-row gap-6'>
                        <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                            <label className='text-neutral-300 font-medium text-xs leading-none '>Email</label>
                            <input type='text' name='email' placeholder='Enter Your Email' className='focus:outline-none focus:border-none w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500'/>
                        </div>

                        <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                            <label className='text-neutral-300 font-medium text-xs leading-none '>Password</label>
                            <input type='password' name='password' placeholder='Enter Your password' className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500'/>
                        </div>
                    </div>
                    
                    <div className='text-xs leading-none text-neutral-400 font-medium  mt-3 mb-5 flex flex-wrap gap-2 sm:justify-between'>
                        <h3>Don’t have an account?<span className='text-primary-400'>Create new account.</span></h3>
                        <h3 className='text-primary-400'> Forget Password?</h3>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row gap-6 items-center'>
                        <button type='submit' className='btn btn-primary sm:max-w-48 cursor-pointer'>Continue</button>
                        <a className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
                            <Icon name='phone' className='icon' size={24}/>
                            Continue with Phone Number
                        </a>

                    </div>
                </form >

                <SocialLogin/>

                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
