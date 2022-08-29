import { faCarrot, faPizzaSlice, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'




const models = [

{icon: faCarrot, h1:"QUALITY FOODS", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, adipisci."},
{icon: faTruck, h1:"FASTEST DELIVERY", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptas."},
{icon: faPizzaSlice, h1:"ORIGINAL RECIPES", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, praesentium."},
];


function Info() {
  return (
    <div id='information' className='flex flex-row justify-evenly p-10'>
        {models.map ((model, index) => {
            return(
                <div key={index} className="my-44 gap-y-4 p-10 flex flex-col bg-white/25">
                    <FontAwesomeIcon icon={model.icon} className="flex mx-auto w-16 h-16 text-black p-2 rounded-xl" />
                    <div className="flex justify-center text-black font-Pro font-bold text-2xl">
                        {model.h1}
                    </div>
                    <div className="flex w-52 font-Pro font-semibold text-center mx-auto text-black text-base">
                        {model.text}
                    </div>
                </div>
        )})}
        
    </div>
  )
}

export default Info