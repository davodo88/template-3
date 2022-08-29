import React from 'react'
import Image from 'next/image';
import Director from '../images/weAre/director.jpg'
import Artist from '../images/weAre/artist.jpg'



function weAre() {
  return (
    <div id="legend" className="w-screen h-max ">
      <div className="flex justify-around  bg-yellow/40 w-screen p-20 h-max">
        <div className="block  w-1/3 p-10">
          <div className="flex justify-center font-Pro font-bold text-4xl mb-16 mx-auto">
            WE ARE LEGEND
          </div>
          <div className="block">
            <p>
              WE DON`T JUST MAKE PIZZA. WE MAKE PEOPLE`S DAYS. VINCENT PIZZERIA
              WAS BUILT ON THE BELIEF THAT PIZZA SHOULD BE SPECIAL, AND WE CARRY
              THAT BELIEF INTO EVERYTHING WE DO.
            </p>
            <div className="border-2 border-black flex w-2/3 h-1 mx-auto mt-16"></div>
          </div>
          <div className="flex text-justify mt-20 font-Pro font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            obcaecati accusamus vel. Velit molestiae dolor harum labore ipsam
            accusamus, assumenda iure exercitationem id recusandae cupiditate
            non officia, cum quisquam incidunt ex natus quas esse quod, libero
            ut! <br />
            <br />
            Molestias quo deserunt placeat repellendus aliquam consequuntur
            omnis perspiciatis ipsa nesciunt non, autem sed consectetur quae
            ullam itaque? 
            </div>
        </div>
        <div className=" flex-col w-1/3 p-10">
          <div className="flex font-Pro font-bold text-sm mx-auto bg-gray-100/10 border-2 border-black/50 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            debitis saepe ipsum quas recusandae laudantium, molestias commodi in
            deleniti quam esse officiis tempora nostrum sed rerum. Quod quae
            iste debitis molestias voluptates molestiae numquam, dolorem
            adipisci porro culpa.
          </div>
          <div className="flex my-8 ">
            <div className="w-20 h-20 ml-8 ">
              <Image
                src={Director}
                width={400}
                height={400}
                alt="Director"
                className="rounded-full   "
              />
            </div>
            <span className="my-auto ml-4 font-Pro font-extrabold ">
              JHON JEFFERSON <br />
              Lawyer, New York
            </span>
          </div>
          <div className="flex font-Pro font-bold text-sm mx-auto bg-gray-100/10 border-2 border-black/50 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            debitis saepe ipsum quas recusandae laudantium, molestias commodi in
            deleniti quam esse officiis tempora nostrum sed rerum. Quod quae
            iste debitis molestias voluptates molestiae numquam, dolorem
            adipisci porro culpa.
          </div>
          <div className="flex my-8 ">
            <div className="w-20 h-20 ml-8 ">
              <Image
                src={Artist}
                width={400}
                height={400}
                alt="Director"
                className="rounded-full "
              />
            </div>
            <span className="my-auto ml-4 font-Pro font-extrabold ">
              SAMANTHA GREENBERG <br />
              Artist, Boston
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default weAre