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
        src: BBQ,
      },
      {
        title: "Pizza PROSCUITO",
        text: "pizza casera al horno de piedra 2",
        src: Buffala,
      },
      {
        title: "Pizza BUFFALA",
        text: "pizza casera al horno de piedra 3",
        src: Proscuitto,
      },
    ];
 const Pizza = () => {
  const [counter, setCounter] = useState(0)
  var samples = muestras.length
  

    return (
      <div id="pizzas" className="flex flex-row py-20 w-screen h-auto ">
        <button
          onClick={() => (counter > 0 ? setCounter(counter - 1) : null)}
          className={classNames("w-12 h-12 m-auto bg-gray-100 rounded-full")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div
          className={classNames(
            "flex flex-col my-44 mx-auto  rounded-md p-10"
          )}>
          <span
            className={classNames(
              "flex flex-col text-center text-2xl my-2 p-4 font-bold font-Pro text-white"
            )}>
            {muestras[counter].title}
          </span>
          <span className="flex justify-center font-Pro text-white my-4">
            {muestras[counter].text}
          </span>
          <div className="w-44 h-44 m-auto">
            <Image
              src={muestras[counter].src}
              width={400}
              height={400}
              alt={muestras[counter].title}
              className="rounded-full m-2"
            />
          </div>
        </div>

        <button
          onClick={() =>
            counter < samples - 1 ? setCounter(counter + 1) : null
          }
          className="w-12 h-12 m-auto bg-gray-100 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    );
}

export default Pizza;