import React from 'react'
import Navbar from './navBar'
import Image from 'next/image'
import Logo from '../images/logo1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'


const alert = () => {
 return(
    <div className='text-white'>SUBSCRIBE</div>
 )
}

function footer() {
  return (
    <div className='flex-col divide-y divide-gray-500 text-white h-max'>
        <div className='flex-col justify-center p-16'>
            <div className="flex font-Pro text-4xl my-10 justify-center">
                SUBSCRIBE FOR OUR NEWSLETTER
            </div>
            <div className="flex justify-center my-10">
                <input type="email" name="" placeholder='Your E-mail' id="email"
                className='bg-gray-600 p-1 rounded-lg'/>
                <input type="button" value="Submit" className='bg-white text-black px-1 mx-2 rounded-lg active:bg-yellow' />
            </div>
        </div>
        <div className='py-12'>
            <div className="w-32 h-32 mx-auto">
                <Image src={Logo} width={400} height={400} alt="logo" />
            </div>
            <div className="flex justify-center font-Pro mt-6"><span className='font-bold'>+0 123 45 67</span><span className='ml-4'>8:00 am - 11:30 pm</span> </div>
            <div className='hidden lg:flex'>
                <Navbar />
            </div>
            <div className="flex justify-center font-Pro">
                <span>Copyright<FontAwesomeIcon icon={faCopyright} />2022</span>
                <span className='ml-4'>DELICIOUS RESTO. All Right Reserved.</span></div>
        </div>
        
    </div>
  )
}

export default footer