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
];

const formatArray = jsonData.map((item)=>{
  if(item.ParentCategoryId === 0){
    return item;
  }else{
    let child = item;
    let childParent = item.ParentCategoryId;
    console.log(childParent);
    return jsonData.map((item)=>{
      if( childParent=== item.Id){
        let newItem = item.subCategory = child;
        return newItem;
      }
    })
  }
})
console.log(formatArray)

function getNestedChildren(arr, parent) {
  var children = [];
  for(var i =0; i < arr.length; ++i) {
      if(arr[i].parent == parent) {
          var grandChildren = getNestedChildren(arr, arr[i].id)

          if(grandChildren.length) {
              arr[i].children = grandChildren;
          }
          children.push( arr[i]);
      }
  }
  return children;
}
var nest = getNestedChildren(jsonData, 0);
console.log(nest);

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
              console.log(item)
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