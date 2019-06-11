import React from "react";
import formatData from '../functions/formatData';

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

const Menu = () => (
  <div>
    {generateUIItem(formatData)}
  </div>
)

export default Menu;