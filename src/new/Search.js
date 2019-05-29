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
    this.setState({searchVal: value});
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
    for(let i = 0; i<searchList.length; i++){
      let item = document.querySelectorAll('li');
      for(let idx = 0; idx<item.length; idx++){
        if(item[idx].value === searchList[i].Id){
          item[idx].style.color = "red";
        }else{
          item[idx].style.color = "";
        }
      }
    }
  }
  
  
  render(){
    return(
      <div>
        <input type="text" onChange={(e)=>this.onChangeSearchValue(e.target.value)}/>
      </div>
    )
  }
}

export default Search;