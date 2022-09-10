import React from 'react'
import Burguer1 from '../../images/burguers/burguer1.jpg'
import Burguer2 from '../../images/burguers/burguer2.jpg'


import Image from 'next/image';


const type = [
    {
        id: 1,
        src: Burguer1,
        name: "model1",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 2,
        src: Burguer2,
        name: "model2",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 3,
        src: Burguer1,
        name: "model3",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 4,
        src: Burguer2,
        name: "model4",
        sour: "spicy",
        bread: "sweet",
    }, 
];


function Burguers () {
   
    return (
        <div className='relative group mt-2 '>
        <span className='group-hover:underline z-20  text-white border-2 border-gray-600 
         group-hover:border-b-0 group-hover:pb-4 py-2 px-4  rounded-t-lg 
        rounded-b-lg group-hover:rounded-b-none transition-all duration-50'>
            Menu 🍔
        </span> 
            <div className="hidden group-hover:flex flex-cols-4 z-10 absolute w-[1125px]   
            top-9 left-[0px]  justify-evenly text-white border-2 border-gray-600 rounded-lg rounded-tl-none">
                {type.map((types, index) => {
                    return(
                        <div key={index} 
                        className="flex flex-col rounded-lg transition-all duration-150 text-center 
                         p-4 my-10 bg-yellow text-black">
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
export default Burguers;