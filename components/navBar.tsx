import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "../utils/utils";





const responsiveMenu = [
  { name: "Home", target: "#home" },
  { name: "Pages", target: "#pages" },
  { name: "Portfolio", target: "#informacion" },
  { name: "Blog", target: "#blog" },
  { name: "Contact", target: "#contact" },
];
function Navbar() {

    const options = [
        {tittle:"Menu", target:"#Home"},
        {tittle:"Pages", target:"#Pages"},
        {tittle:"Portfolio", target:"#Portfolio"},
        {tittle:"Blog", target:"#Blog"},
        {tittle:"Contact", target:"#Contact"},
    ];

  const [menu, setMenu] = useState(false);
  const [icon ,setIcon] = useState(false)


  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
    icon ? setIcon(false) : setIcon(true);
  };

  return (
    <nav className="relative flex  justify-between w-full text-white ">
      <div id="medium" className=" hidden md:flex  ">
        <ul className="flex my-2 w-screen text-base lg:text-xl justify-center ">
          {options.map((Option, index) => {
            return (
              <li
                key={index}
                className="trabsition-all hover:translate-y-1 duration-200 font-Pro md:text-xl font-bold hover:text-yellow m-4 "
              >
                {Option.tittle}
              </li>
            );
          })}
        </ul>
      </div>
      {menu && (
        <div id="movil"
          className="flex absolute top-8  justify-center
          text-white rounded text-xl z-40 w-full p-5 h-64 "
        >
          <ul className="">
            {responsiveMenu.map((etiqueta, index) => {
              return (
                <li
                  key={index}
                  className="trabsition-all hover:translate-x-2 duration-200 p-2 font-Pro font-semibold hover:text-yellow"
                >
                  <a href={etiqueta.target}>{etiqueta.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        id="busqueda"
        onClick={handleNavbar}
        className={classNames("text-white flex md:hidden")}
      >
        <FontAwesomeIcon icon={faBars} className="text-white " />
        {icon && (
          <FontAwesomeIcon icon={faBars} className="rotate-90 text-white" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
