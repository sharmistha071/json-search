import React from "react";
import formatData from './formatData';
console.log(formatData)

const Menu = () => (
  <div>
    <ul>
      {formatData.map((item, index) => {
        if(item.hasOwnProperty('subcategory')){
          return (
            <li value={item.Id} key={index}>{item.Name}->
              <ul>
                {item.subcategory.map((item, index)=>{
                  return (
                    <li value={item.Id} key={index}>{item.Name}
                      {item.subcategory && (
                        <ul>
                          {item.subcategory.map((item, index)=>{
                            return <li value={item.Id} key={index}>{item.Name}</li>
                          })}
                        </ul>
                      )}
                      
                    </li>  
                   )
                })}
              </ul>
            </li>
          )
        }else {
          return <li key={index}>{item.Name}</li>
        }
      })}
    </ul>
  </div>
)

export default Menu;