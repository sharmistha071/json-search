import React, {Component} from "react";
import formatData from './formatData';

class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      searchVal: ''
    }
    this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchNew = this.searchNew.bind(this);
  }
  onChangeSearchValue(value){
    this.setState({searchVal: value});
    // console.log(this.handleSearch(formatData, 'Name', value));
    // let result = this.handleSearch(formatData, 'Name', value);
    // console.log('result', result);
    this.searchNew(value)
    
  }

  searchNew(searchText){
    let searchlist =  formatData.filter(
      item => item.Name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        || item.Name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );

     console.log(searchlist);
    for(let i= 0; i<searchlist.length; i++){
      let activeIndex = searchlist[i].Id;
      let item = document.querySelectorAll('li');
      console.log(item)
      for(let idx = 0; idx <item.length; idx++){
        if(activeIndex === idx){
          console.log('activeindex', item[activeIndex], activeIndex)
          
        }
      }
    }
  }

  handleSearch(obj, key, value){
    if(value===obj[key]) {
      return obj;
    } else {
      for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
        if (typeof obj[i] == 'object') {
          var found = this.handleSearch(obj[i], key, value);
          if (found) {
            // If the object was found in the recursive call, bubble it up.
            return found;
          }
        }
      }
    }
  }
  
  render(){
    // console.log(this.state)
    return(
      <div>
        <input type="text" onChange={(e)=>this.onChangeSearchValue(e.target.value)}/>
      </div>
    )
  }
}

export default Search;