import React, {Component} from 'react';
const data =[  
  {  
     "id":1,
     "parent": 0,
     "name": 'Food',
     "subcategory":[
        {  
           "id":3,
           "name": "Snaks",
           "parent":1
        }
     ]
  },
  {  
      "id":3,
      "parent":0,
      "name": "Home"
  },
  {  
     "id":2,
     "parent":0,
     "name": "Children",
     "subcategory":[  
        {  
           "id":23,
           "name": "Baby"
        }
     ]
  }
]

const Menu = () => (
  <div>
    <ul>
      {data.map((item) => {
        if(item.hasOwnProperty('subcategory')){
          return (
            <li>{item.name}
              <ul>
                {item.subcategory.map((item)=>{
                  return <li>{item.name}</li>
                })}
              </ul>
            </li>
          )
        }else {
          return <li>{item.name}</li>
        }
      })}
    </ul>
  </div>
  
)

export default Menu;