import React, {Component} from "react";
import * as data from '../categories.json';
const searchData = data.default;

class Search extends Component{
  constructor(props){
    super(props);
    this.state={}
    this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.highlightSeachvalue = this.highlightSeachvalue.bind(this)
  }

  onChangeSearchValue(value){
    this.handleSearch(value)
  }

  handleSearch(searchText){
    let pattern = new RegExp(searchText, 'gi')
    let searchList = searchData.filter((item) => {
      return ( 
        item.Name.match(pattern)
        );
      }
    );
    
    this.highlightSeachvalue(searchList)
  }

  highlightSeachvalue(searchList){
    searchList.forEach(element => {
      let listItem = document.querySelectorAll('li');
      listItem.forEach(item => {
        if(item.value === element.Id){
          item.firstChild.style.color = 'red';
        }else{
          item.firstChild.style.color = 'red';
        }
      });
    });
  }
  
  
  render(){
    return(
      <div>
        <input type="text" onChange={(e)=>this.onChangeSearchValue(e.target.value)} placeholder="Search here"/>
      </div>
    )
  }
}

export default Search;