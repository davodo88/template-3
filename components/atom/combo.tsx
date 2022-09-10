import React from 'react'
import Image from 'next/image';
import Combo1 from '../../images/combo/combo1.jpg'
import Combo2 from '../../images/combo/combo2.jpg'


const type = [
    {
        id: 1,
        src:Combo1,
        name: "model1",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 2,
        src:Combo2,
        name: "model2",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 3,
        src:Combo1,
        name: "model3",
        sour: "spicy",
        bread: "sweet",
    },
    {
        id: 4,
        src:Combo2,
        name: "model4",
        sour: "spicy",
        bread: "sweet",
    }, 
];


function Combo () {

    return (
        <div className='relative group mt-2 transition-all duration-150'>
        <span className='group-hover:underline z-20  text-white border-2 border-gray-600 
         group-hover:border-b-0 group-hover:pb-4 py-2 px-4  rounded-t-lg 
        rounded-b-lg group-hover:rounded-b-none transition-all duration-50'>
        Combo 🍟</span>
            <div className="opacity-0 group-hover:opacity-100 flex flex-cols-4 group-hover:transition-opacity 
            delay-75 duration-200 rounded-lg rounded-tr-none z-10 absolute w-[1125px]   
            top-9 -right-10 mx-10 justify-evenly text-white border-2 border-gray-600">
                {type.map((types, index) => {
                    return(
                        <div key={index} 
                        className="flex flex-col rounded-lg  text-center 
                         p-4 my-10 bg-yellow text-black">
                            <span className="font-Pro font-bold mb-2 capitalize text-xs">
                                {types.name}
                            </span>
                            <Image src={types.src} 
                            width={150} height={150} 
                            alt="combo" 
                            className='rounded-lg object-cover'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
        
}
export default Combo;