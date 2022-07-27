import React, { useState } from 'react'
import { classNames } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BBQ from '../images/pizzas/bbq.jpg'
import Buffala from '../images/pizzas/buffala.jpg'
import Proscuitto from '../images/pizzas/proscuitto.jpeg'
import Image from 'next/image';




    const muestras = [
      {
        title: "Pizza BBQ",
        text: "pizza casera al horno de piedra",
        modelo: 
          <Image
            src={"/images/pizzas/bbq.jpg"}
            width={400}
            height={400}
            alt="pizza"
          />
        ,
      },
      {
        title: "Pizza PROSCUITO",
        text: "pizza casera al horno de piedra",
        modelo: 
          <Image
            src={"../images/pizzas/bbq.jpg"}
            width={400}
            height={400}
            alt="pizza"
          />
        ,
      },
      {
        title: "Pizza BUFFALA",
        text: "pizza casera al horno de piedra",
        modelo: 
          <Image
            src={"/images/pizzas/bbq.jpg"}
            width={400}
            height={400}
            alt="pizza"
          />
        ,
      },
    ];
 const Pizza = () => {
    return (
      <div id="pizzas" className="flex flex-row py-24 w-screen h-auto ">
        <button
         
          className={classNames(
            "w-12 h-12 m-auto bg-gray-100 rounded-full"
          )}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {muestras.map((muestra, index) => {
          return (
            <div
              key={index}
              className={classNames("flex flex-col my-24 border-2 mx-auto w-72 h-72 rounded-md pt-3")}
            >
              <span
                className={classNames(
                  "flex flex-col text-center text-xl mt-2 font-medium text-white"
                )}
              >
                <span>{muestra.title.split(" ")[0]}</span>
                <span>{muestra.title.split(" ")[1]}</span>
              </span>
              <span className="flex justify-center hover:underline decoration-white text-white my-4">
                {muestra.text}
              </span>
            </div>
          );
        })}
        <button
          
          className="w-12 h-12 m-auto bg-gray-100 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    );
}

export default Pizza;