import React, { Component } from 'react';
import './App.css';
import formatData from './functions/formatData';
import Search from './components/Search';
import Menu from './components/Menu';

const menuData = formatData;



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialItems: formatData,
      menuData: []
    }
    this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  /**
   * On search input field change value
   * @param {String} value user typed value
   */
  onChangeSearchValue(value) {
    this.handleSearch(value);
  }
  /**
   * On search text match pattern
   * @param {Object} event keyboard event
   */
  handleSearch(event) {
    let searchText = event.target.value
    let pattern = new RegExp(searchText, "gi");
    let filteredList  = this.state.initialItems;
    filteredList = filteredList.filter(item => {
      if(item.hasOwnProperty('subcategory')){
        item.subcategory.filter(item => {
          console.log(item)
          return item.Name.match(pattern);
        })
      }else {
        return item.Name.match(pattern);
      }
    });
   
    this.setState({menuData: filteredList});
    console.log(this.state.menuData);
  }

  componentDidMount(){
    this.setState({menuData: formatData})
  }

  render(){
    return(
      <div className="App">
        <section>
          <div className="SearchSection">
            <Search onChange={this.onChangeSearchValue} />
          </div>
        </section>
        <section>
          <div>
            <Menu menuItems={this.state.menuData} />
          </div>
        </section> 
      </div>
    )
  }
}

export default App;
