import React, {Component} from 'react';
import * as data from '../src/categories.json';
 console.log(data.default);
const testData = data.default;

const jsonData = [
  {
    "Id": 238,
    "Name": "Popular",
    "ParentCategoryId": 0,
    "DisplayOrder": -3,
    "Picture": {
      "Id": 13891,
      "MimeType": "image/png",
      "SeoFilename": "popular",
      "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
      "PictureBinary": null
    },
    "ContainsProducts": true
  },
  {
    "Id": 236,
    "Name": "Fruits",
    "ParentCategoryId": 2,
    "DisplayOrder": -3,
    "Picture": {
      "Id": 13891,
      "MimeType": "image/png",
      "SeoFilename": "popular",
      "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
      "PictureBinary": null
    },
    "ContainsProducts": true
  },
  {
    "Id": 2,
    "Name": "Food",
    "ParentCategoryId": 0,
    "DisplayOrder": -3,
    "Picture": {
      "Id": 13891,
      "MimeType": "image/png",
      "SeoFilename": "popular",
      "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
      "PictureBinary": null
    },
    "ContainsProducts": true
  },
  {
    "Id": 235,
    "Name": "Snaks",
    "ParentCategoryId": 2,
    "DisplayOrder": -3,
    "Picture": {
      "Id": 13891,
      "MimeType": "image/png",
      "SeoFilename": "popular",
      "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
      "PictureBinary": null
    },
    "ContainsProducts": true
  },
  {
    "Id": 237,
    "Name": "SnaksTwo",
    "ParentCategoryId": 2,
    "DisplayOrder": -3,
    "Picture": {
      "Id": 13891,
      "MimeType": "image/png",
      "SeoFilename": "popular",
      "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
      "PictureBinary": null
    },
    "ContainsProducts": true
  },
  {
    "Id": 238,
    "Name": "SnaksThree",
    "ParentCategoryId": 22,
    "DisplayOrder": -3,
    "Picture": {
      "Id": 13891,
      "MimeType": "image/png",
      "SeoFilename": "popular",
      "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
      "PictureBinary": null
    },
    "ContainsProducts": true
  },
];

// const formatArray = jsonData.map((item)=>{
//   if(item.ParentCategoryId === 0){
//     return item;
//   }else{
//     let child = item;
//     let childParent = item.ParentCategoryId;
//     console.log(childParent);
//     return jsonData.map((item)=>{
//       if( childParent=== item.Id){
//         let newItem = item.subCategory = child;
//         return newItem;
//       }
//     })
//   }
// })
// console.log(formatArray)

// const arrNew = [];
// let subItem = [];
// function formatArrayNew(obj){
//   for(let i = 0; i< obj.length; i++){
//     if(obj[i].ParentCategoryId === 0){
//       arrNew.push(obj[i]);
//     }else{
//       let childItem = obj[i];
//       let childParentId = childItem.ParentCategoryId;
//       for(let i = 0; i< arrNew.length; i++){
//         if(arrNew[i].Id === childParentId){
//           console.log(arrNew[i].Id)
//           subItem.push(childItem)
//           arrNew[i].subCategory = subItem;
//         }
//       }
//     }
//   }
// }
// console.log(formatArrayNew(testData));
// console.log(arrNew);


const json = [{
  'id': 1,
  parent: 0
},
{
  'id': 23,
  parent: 2
},
{
  'id': 3,
  parent: 1
},
{
  'id': 2,
  parent: 0
}];

const findParent = (parent, child) => {
  for(let i = 0; i < jsonData.length; i++){
    if(parent === jsonData[i].Id){
      if (jsonData[i].hasOwnProperty('subcategory'))
        jsonData[i].subcategory.push({ 'id':  jsonData[i].id}) 
      else {
        jsonData[i].subcategory = [ { 'id': child } ];
      } 

      break; 
    }
  }
}

for(let i = 0; i < jsonData.length; i++){
  if(jsonData[i].ParentCategoryId > 0){
      findParent(jsonData[i].ParentCategoryId, jsonData[i].Id)
  }
}
console.log(json)


class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      title: ''
    };
    
    this.renderMenuItem = this.renderMenuItem.bind(this)
  }

  renderMenuItem(obj){
    return obj.map((item, index) => {
      if(item.ParentCategoryId === 0){
        return <li key={index} value={item.Id} className="parentItem">{item.Name}</li>
      }else{  
        return <li key={index} style={{color: 'green'}}>{item.Name}</li>
      }
    });
  }

  // componentDidMount(){
  //   var inputs = document.querySelectorAll('.parentItem');
  //   for (var i = 0; i < inputs.length; i++) {
  //     console.log(inputs[i]);
  //   }
    
  // }

  render(){
    return(
      <div>
        <h1>hello from search</h1>
        {/* <ul>{this.renderMenuItem(jsonData)}</ul> */}
        <ul>
        {
          jsonData.map((item, index) => {
            if(item.ParentCategoryId === 0){
              return <li key={index} value={item.Id} className="parentItem">{item.Name}</li>
            }else{ 
              let item = document.querySelectorAll('.parentItem');
              // console.log(item)
              return (
                <ul>
                  <li key={index} style={{color: 'green'}}>{item.Name}</li>
                </ul>
              )
            }
        })}
        </ul>
      </div>
    )
  }
}

export default Search;



/**********Solution One */

const json = [{
  'id': 1,
  parent: 0
},
{
  'id': 23,
  parent: 2
},
{
'id': 3,
parent: 1
},
{
  'id': 2,
  parent: 0
}];

const childToDelete = {}

const findParent = (parent, child) => {
  for(let idx = 0; idx < json.length; idx++){
    if(parent == json[idx].id){
      if (json[idx].hasOwnProperty('subcategory')){
        json[idx].subcategory.push({ ...json[child] })
      }
           
      else {
          json[idx].subcategory = [ { ...json[child] } ];
      } 

      childToDelete[child] = "";

      break; 
    }
  }
}

for(let i = 0; i < json.length; i++){
console.log(json[i])
if(json[i].parent > 0){
  findParent(json[i].parent, i)
}
}

let count = 0;

for(key in childToDelete){
json.splice(key -count, 1)
count++;
}

console.log(JSON.stringify(json))


