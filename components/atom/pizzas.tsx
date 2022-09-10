import React from 'react'
import Image from 'next/image'
import Bbq from '../../images/pizzas/bbq.jpg'
import Proscuitto from '../../images/pizzas/proscuitto.jpeg'
import Buffala from '../../images/pizzas/buffala.jpg'

const type = [
    {
        id: 1,
        src:Bbq,
        name: "model1",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 2,
        src:Proscuitto,
        name: "model2",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 3,
        src:Buffala,
        name: "model3",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 4,
        src:Bbq,
        name: "model4",
        sour: "spicy",
        bread: "sweet",
    }, 
];


function Pizzas () {
   
  

    return (
        <div className='relative group mt-2'>
        <span className='group-hover:underline z-20  text-white border-2 border-gray-600 
         group-hover:border-b-0 group-hover:pb-4 py-2 px-4  rounded-t-lg 
        rounded-b-lg group-hover:rounded-b-none transition-all duration-50'>
            Menu 🍕
        </span>
            <div className="hidden  group-hover:flex flex-cols-4 z-10 absolute w-[1120px]   
            top-9 left-[-475px]  justify-evenly text-white border-2 border-gray-600 rounded-lg">
                {type.map((types, index) => {
                    return(
                        <div key={index} className="flex flex-col transition-all duration-150 text-center 
                         p-4 shadow-xl drop-shadow-xl my-10 text-black bg-yellow rounded-lg">
                            <span className="font-Pro capitalize text-xs mb-2 font-bold">
                                {types.name}
                            </span>
                            <Image src={types.src} 
                            width={150} 
                            height={150} 
                            alt="burguer" 
                            className='rounded-lg object-cover'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
        
}
export default Pizzas;