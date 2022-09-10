import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import Burguers from './atom/burguers'
import Combo from './atom/combo'
import Pizzas from './atom/pizzas'




const Allmenu = () => {


  return(
    <div id='menus' className='hidden p-10 xl:flex bg-black text-black h-[600px] py-10'>
        <div className="flex p-10 border-2 border-gray-600 w-screen h-[510px] justify-around ">
          <div className=' '><Burguers /></div>
          <div className=' '><Pizzas /></div>
          <div className=' '><Combo /></div>
        </div>
    </div>
  )
}
export default Allmenu