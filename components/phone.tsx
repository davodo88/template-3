import { faCartShopping, faMobileScreen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Image from 'next/image'
import Logo from '../images/logo1.jpg'


const Phone = () => {
  return (
    <div
      id="info"
      className='flex justify-around bg-[url("/images/FondoPizzas.jpg")] text-white h-44 w-screen'
    >
      <div className="flex flex-row gap-6 my-auto">
        <div className="">
          <FontAwesomeIcon icon={faMobileScreen} className="w-10 h-10" />
        </div>
        <div className="flex-col">
          <h4 className="text-white font-Pro font-bold">+0 123 45 67</h4>
          <h4 className="text-gray-400">8:00 am - 11:30 pm</h4>
        </div>
      </div>
      <div className="my-auto w-36 h-36 text-white">
        <Image src={Logo} width={400} height={400} alt="logo" className="" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-white font-Pro font-bold justify-center text-right">
          <div className="">$0.00</div>
          <div className="">0 items - View Cart</div>
        </div>
        <div className="flex my-auto ml-4">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-12 h-12 text-white"
          />
        </div>
      </div>
    </div>
  );
}
export default Phone;