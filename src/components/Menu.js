import React from "react";


const generateUIItem = (obj) => {
  return (
    <ul>
      { obj.map((item, index) => {
        if(typeof item == 'object' && item.hasOwnProperty('subcategory')){
          return (
            <li value={item.Id} key={index}>{item.Name}{generateUIItem(item.subcategory)}</li>
          )
        }else{
          return <li value={item.Id} key={index}>{item.Name}</li>
        }
      })
      }
    </ul>
  )
}

const Menu = (props) => {
  return(
    <div>
      {generateUIItem(props.menuItems)}
    </div>
  )
  }

export default Menu;