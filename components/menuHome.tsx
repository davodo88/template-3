import React from 'react'




const menuHome = () => {


    function dropMenu() {
        document.getElementById("myDropdown")?.classList.toggle("show");
    }
    const options = [
        {TITLE:'MENU'},
        {TITLE:'BURGUERS'},
        {TITLE:'PIZZAS'},
    ]

  return (
    <div id="menus">
      <button id="dropbtn" onClick={dropMenu}>
        Menu
      </button>
      {options.map((option, index) => {
        return (
          <ul key={index} id="myDropdown" className="">
            <li className="">{option.TITLE}</li>
          </ul>
        );
      })}
      <div className="">
        <menu className=''>menu
            <li className="">1</li>
            <li className="">2</li>
            <li className="">3</li>
            <li className="">4</li>
        </menu>
      </div>
    </div>
  );
}

export default menuHome

