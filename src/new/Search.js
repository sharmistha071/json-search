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
  }
  onChangeSearchValue(value){
    this.setState({searchVal: value});
    console.log(this.handleSearch(formatData, 'Name', value));
  }
  handleSearch(obj, key, value){
    // console.log(obj, key, value)
    let text = obj[key];
    if (text.match(/Home/)) {
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