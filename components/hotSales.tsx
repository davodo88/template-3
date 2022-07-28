import React from 'react'
import BBQ from '../images/pizzas/bbq.jpg'
import Buffala from '../images/pizzas/buffala.jpg'
import Proscuitto from '../images/pizzas/proscuitto.jpeg'
import Image from 'next/image'


const sales = [
  {
    tittle: "CARBONARA",
    text: "Lorem ipsum dolor consectetur adipisicing elit. Cumque, ratione.",
    price: 380,
    image:  Buffala ,
  },
  {
    tittle: "CAPRICCIOSA",
    text: "Lorem ipsum dolor consectetur adipisicing elit. Cumque, ratione.",
    price: 290,
    image: Proscuitto ,
  },
  {
    tittle: "PROSCIUTTO",
    text: "Lorem ipsum dolor consectetur adipisicing elit. Cumque, ratione.",
    price: 350,
    image: Proscuitto ,
  },
  {
    tittle: "DIABLO",
    text: "Lorem ipsum dolor consectetur adipisicing elit. Cumque, ratione.",
    price: 350,
    image:  BBQ ,
  },
];

const hotSales = () => {
  return (
    <div className='flex flex-col font-Pro text-center py-44'>
        <h1 className="text-white mb-24 font-bold text-3xl">
            HOT SALES
        </h1>
        <div className='flex flex-row justify-evenly '>
        {sales.map((sale, index) => {
            return (
              <div key={index} className={"text-white w-44 gap-y-6 flex flex-col"}>
                <Image src={sale.image} alt={sale.tittle} className="rounded-full"/>
                <h1 className="font-extrabold text-xl">{sale.tittle}</h1>
                <h4 className=" text-white/75 font-thin">{sale.text}</h4>
                <h2 className="text-yellow font-extrabold">{sale.price/100}€</h2>
              </div>
            );
        })}
        </div>
    </div>
  )
}

export default hotSales