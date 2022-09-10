import React from 'react'
import Image from 'next/image';
import Director from '../images/weAre/director.jpg'
import Artist from '../images/weAre/artist.jpg'



function weAre() {
  return (
    <div id="legend">
      <div className="flex flex-col w-screen h-max justify-evenly pt-20 bg-yellow/40">
        <div className="hidden md:flex justify-center w-screen  font-Pro font-bold text-4xl text-center">
          WE ARE LEGEND
        </div>
        <div className="flex flex-col md:flex-row justify-around w-screen p-16 h-max">
          <div className="flex-col md:w-1/3 md:p-1 md:mt-10 h-max">
            <div className="flex md:hidden justify-center text-center font-Pro font-bold text-4xl mb-16 mx-auto">
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
            <div className="hidden md:flex text-justify mt-20 font-Pro font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              obcaecati accusamus vel. Velit molestiae dolor harum labore ipsam
              accusamus, assumenda iure exercitationem id recusandae cupiditate
              non officia, cum quisquam incidunt ex natus quas esse quod, libero
              ut! 
              <br />
              <br />
              Molestias quo deserunt placeat repellendus aliquam consequuntur
              omnis perspiciatis ipsa nesciunt non, autem sed consectetur quae
              ullam itaque? 
            </div>
            <div className="flex md:hidden mt-10 font-Pro font-bold justify-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Similique quia consequatur illum dolorem hic facilis nam itaque delectus 
              eveniet sunt?
            </div>
          </div>
          <div className=" flex-col md:w-1/3 md:p-1 md:mt-10 h-max ">
            <div className="flex md:hidden font-Pro font-bold text-sm mx-auto bg-gray-100/10 border-2 border-black/50 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dolore sunt alias facere optio laboriosam?
            </div>
            <div className="hidden md:flex font-Pro font-bold text-sm mx-auto bg-gray-100/10 border-2 border-black/50 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis saepe ipsum quas recusandae laudantium, molestias commodi in
              deleniti quam esse officiis tempora nostrum sed rerum. Quod quae
              iste debitis molestias voluptates molestiae numquam, dolorem
              adipisci porro culpa.
            </div>
            <div className="flex my-8 justify-center">
              <div className="w-32 md:w-20 h-26 md:h-20 md:ml-8 ">
                <Image
                  src={Director}
                  width={600}
                  height={600}
                  alt="Director"
                  className="flex rounded-full md:rounded-lg"
                />
              </div>
              <span className="flex my-auto ml-4 font-Pro font-extrabold  ">
                JHON JEFFERSON <br />
                Lawyer, New York
              </span>
            </div>
            <div className="flex md:hidden font-Pro font-bold text-sm mx-auto bg-gray-100/10 border-2 border-black/50 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dolore sunt alias facere optio laboriosam?
            </div>
            <div className="hidden md:flex font-Pro font-bold text-sm mx-auto bg-gray-100/10 border-2 border-black/50 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis saepe ipsum quas recusandae laudantium, molestias commodi in
              deleniti quam esse officiis tempora nostrum sed rerum. Quod quae
              iste debitis molestias voluptates molestiae numquam, dolorem
              adipisci porro culpa.
            </div>
            <div className="flex my-8 justify-center">
              <div className="w-32 md:w-20 h-26 md:h-20 md:ml-8 ">
                <Image
                  src={Artist}
                  width={600}
                  height={600}
                  alt="Director"
                  className="flex rounded-full md:rounded-lg"
                />
              </div>
              <span className="flex my-auto ml-4 font-Pro font-extrabold ">
                SAMANTHA GREENBERG <br />
                Artist, Boston
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default weAre